/**
 * DTU Academic Bot - Frontend Logic
 */

const AIBot = {
    isOpen: false,
    history: [],

    init: () => {
        AIBot.injectUI();
        AIBot.addListeners();
    },

    injectUI: () => {
        const chatHTML = `
            <div class="ai-bot-toggle" id="ai-toggle" title="Ask DTU Bot">
                🤖
            </div>
            <div class="chat-window ultra-glass hidden" id="chat-window">
                <div class="chat-header">
                    <div style="display:flex; align-items:center; gap:10px;">
                        <div class="bot-avatar">🤖</div>
                        <div>
                            <div style="font-weight:800; font-size:0.9rem; letter-spacing:0.5px;">DTU Giga-Brain</div>
                            <div style="font-size:0.7rem; color:var(--success); opacity:0.9;">System: Active</div>
                        </div>
                    </div>
                    <div style="display:flex; gap:12px; align-items:center;">
                        <button onclick="AIBot.clearChat()" class="header-icon" title="Clear Chat">🗑️</button>
                        <button onclick="AIBot.toggle()" class="header-icon" style="font-size:1.4rem;">×</button>
                    </div>
                </div>
                <div class="chat-messages" id="chat-messages">
                    <div class="message bot">
                        Hello! I am the **DTU Giga-Brain**. How can I assist you with your schedule, electives, or campus resources today?
                    </div>
                </div>
                <div id="prompt-chips" class="prompt-chips"></div>
                <form class="chat-input-area" onsubmit="AIBot.handleSubmit(event)">
                    <input type="text" class="chat-input" id="chat-input" placeholder="Ask about resources, electives..." autocomplete="off">
                    <button type="submit" class="send-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                    </button>
                </form>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', chatHTML);
    },

    addListeners: () => {
        const toggle = document.getElementById('ai-toggle');
        toggle.onclick = AIBot.toggle;
        setTimeout(() => toggle.classList.add('pulse'), 5000); // Pulse after 5s to grab attention
    },

    toggle: () => {
        AIBot.isOpen = !AIBot.isOpen;
        const windowEl = document.getElementById('chat-window');
        windowEl.classList.toggle('hidden', !AIBot.isOpen);
        if (AIBot.isOpen) document.getElementById('chat-input').focus();
    },

    addMessage: (text, sender) => {
        const container = document.getElementById('chat-messages');
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender} animate-in`;
        
        let processedText = text;
        let prompts = [];

        if (sender === 'bot') {
            // Extract suggested prompts
            const promptMatch = text.match(/\[SUGGESTED_PROMPTS:\s*(.*?)\]/);
            if (promptMatch) {
                processedText = text.replace(promptMatch[0], '').trim();
                try {
                    // Extremely basic parse of "Q1", "Q2" format
                    const rawPrompts = promptMatch[1].split(',').map(p => p.trim().replace(/^"|"$/g, ''));
                    prompts = rawPrompts;
                } catch (e) { console.error("Prompt Parse Error", e); }
            }
            msgDiv.innerHTML = AIBot.parseMarkdown(processedText);
        } else {
            msgDiv.textContent = text;
        }
        
        container.appendChild(msgDiv);
        container.scrollTop = container.scrollHeight;
        
        // Render chips if any
        if (sender === 'bot') {
            AIBot.renderPromptChips(prompts);
        }

        // Save to history for context
        AIBot.history.push({ role: sender === 'bot' ? 'model' : 'user', parts: [{ text: text }] });
        if (AIBot.history.length > 20) AIBot.history.shift();
    },

    renderPromptChips: (prompts) => {
        const chipContainer = document.getElementById('prompt-chips');
        chipContainer.innerHTML = '';
        if (!prompts || prompts.length === 0) return;

        prompts.forEach(prompt => {
            const btn = document.createElement('button');
            btn.className = 'prompt-chip';
            btn.textContent = prompt;
            btn.onclick = () => AIBot.handleChipClick(prompt);
            chipContainer.appendChild(btn);
        });
    },

    handleChipClick: (prompt) => {
        const input = document.getElementById('chat-input');
        input.value = prompt;
        document.querySelector('.chat-input-area').dispatchEvent(new Event('submit', { cancelable: true }));
    },

    clearChat: () => {
        if (confirm("Clear conversation history?")) {
            AIBot.history = [];
            document.getElementById('prompt-chips').innerHTML = '';
            const container = document.getElementById('chat-messages');
            container.innerHTML = `
                <div class="message bot">
                    History cleared. What academic guidance do you need?
                </div>
            `;
        }
    },

    parseMarkdown: (text) => {
        if (!text) return "";
        let html = text
            .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\|(.+)\|/g, (match, content) => {
                const cells = content.split('|').map(c => c.trim()).filter(c => c !== "");
                if (cells.length === 0) return "";
                return `<tr>${cells.map(c => `<td>${c}</td>`).join('')}</tr>`;
            })
            .replace(/(<tr>.+<\/tr>)+/g, match => `<div class="table-container"><table class="markdown-table">${match}</table></div>`)
            .replace(/<tr>\s*<td>-+\s*<\/td>.*?<\/tr>/g, '') 
            .replace(/^\s*[-*+]\s+(.*)$/gm, '<li>$1</li>')
            .replace(/(<li>.*<\/li>)+/g, match => `<ul>${match}</ul>`)
            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" class="ai-link">$1</a>')
            .replace(/\n/g, '<br>');
        
        return html;
    },

    handleSubmit: async (e) => {
        if(e) e.preventDefault();
        const input = document.getElementById('chat-input');
        const message = input.value.trim();
        if (!message) return;

        input.value = '';
        document.getElementById('prompt-chips').innerHTML = ''; // Hide chips while loading
        AIBot.addMessage(message, 'user');

        try {
            // Show loading state with animation
            const loadingDiv = document.createElement('div');
            loadingDiv.className = 'message bot loading-msg';
            loadingDiv.innerHTML = '<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>';
            loadingDiv.id = 'bot-loading';
            document.getElementById('chat-messages').appendChild(loadingDiv);
            document.getElementById('chat-messages').scrollTop = document.getElementById('chat-messages').scrollHeight;

            const user = Auth.getCurrentUser();
            const db = DB.get();
            const myClasses = db.classes.filter(c => 
                (user.role === 'student' && c.branch === user.branch && c.section === user.section && c.semester == user.semester) ||
                (user.role === 'professor' && c.professor === user.name)
            );

            const API_BASE = 'https://dtu-timetable-schedular-backend.onrender.com';

            const response = await fetch(`${API_BASE}/api/ai/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    message: message,
                    history: AIBot.history,
                    context: {
                        userInfo: { name: user.name, role: user.role, branch: user.branch, section: user.section, semester: user.semester },
                        currentTime: new Date().toLocaleString(),
                        dayOfWeek: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
                        timetable: myClasses,
                        universityInfo: UNIVERSITY_INFO
                    }
                })
            });

            const data = await response.json();
            if(document.getElementById('bot-loading')) document.getElementById('bot-loading').remove();

            if (data.success) {
                AIBot.addMessage(data.response, 'bot');
            } else {
                AIBot.addMessage(data.message || "Brain synchronization error.", 'bot');
            }
        } catch (error) {
            console.error("AI Bot Error:", error);
            if(document.getElementById('bot-loading')) document.getElementById('bot-loading').remove();
            AIBot.addMessage(`System Error: ${error.message}. Check connectivity.`, 'bot');
        }
    }

};
