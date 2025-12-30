const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());

// Health & Diagnostic Check
app.get('/api/ai/health', async (req, res) => {
    try {
        const API_KEY = process.env.OPENROUTER_API_KEY;
        if (!API_KEY) {
            return res.json({ success: false, message: 'Missing OPENROUTER_API_KEY in Environment' });
        }

        // Fetch list of models from OpenRouter to verify key
        const listUrl = `https://openrouter.ai/api/v1/models`;
        const response = await fetch(listUrl, {
            headers: { 'Authorization': `Bearer ${API_KEY}` }
        });
        const data = await response.json();

        res.json({ 
            success: true, 
            message: 'OpenRouter Proxy is active.',
            diagnostics: {
                hasKey: true,
                nodeVersion: process.version,
                openRouterResponse: response.ok ? 'Authorized' : 'Unauthorized',
                availableModelsCount: data.data ? data.data.length : 'Unable to list models',
                deepseekAvailable: data.data ? data.data.some(m => m.id.includes('deepseek')) : false
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// AI Chat Proxy
app.post('/api/ai/chat', async (req, res) => {
    try {
        const { message, context, history } = req.body;
        const API_KEY = process.env.OPENROUTER_API_KEY;

        if (!API_KEY) {
            return res.status(500).json({ success: false, message: 'AI Error: OPENROUTER_API_KEY is missing from .env' });
        }

        // --- GIGA-BRAIN SYSTEM PROMPT (Logic Density: Ultra-V3.2) ---
        const systemPrompt = `You are the "DTU Giga-Brain", an ultra-high-intelligence academic authority and legendary senior mentor at Delhi Technological University. You are powered by DeepSeek R1 Chimera reasoning.

## LOGICAL OPERATING SYSTEM (Giga-OS v3.2)
1. **Chain-of-Thought (CoT) + Multi-Stage Reasoning**:
   - **Intent Focus**: Detect core needs (Admissions, Academics, Placements, Campus Life, Research).
   - **Cross-Referencing**: Map the user's context (${context.userInfo.branch}, Sem ${context.userInfo.semester}) to the massive university knowledge base.
   - **Giga-Extraction**: Mine "Senior Hacks", "Research Centers", "Faculty Hall of Fame", and "Electives Guide" clusters for gold-standard intel.
   - **Resource Mapping**: ALWAYS link 'fresources.tech' for study material queries. Use the specific branch/sem links from 'resource_map'.
   - **Elective Advisory**: Use 'electives_guide' to recommend courses based on 'High Scoring' vs 'Utility'. Quote the "Tip" field.
   - **Proactive Anticipation**: You don't just answer; you mentor. If asking about a lab, mention the best Xerox shop for manuals. If asking about a tech team, mention upcoming fests.
   - **Constraint Check**: Bold key terms. No triple asterisks. Tone: Sharp, authoritative, yet supportive.

2. **REASONING LAYERS**:
   - **Tactical**: Immediate answer to the user query.
   - **Strategic**: How this fits into their 4-year journey (CGPA hacks, internships).
   - **Philosophical**: Encouraging the "DTU Spirit" (Innovation, Resilience, Community).

3. **INVERSE PROMPTING (Mandatory)**: 
   - Every response MUST end with a hidden [SUGGESTED_PROMPTS] block.
   - These must be the 3 most logical follow-ups that lead the user deeper into academic success.
   - Format: [SUGGESTED_PROMPTS: "Question 1", "Question 2", "Question 3"]
   - CRITICAL: Keep it on a single line. Do not use newlines inside the brackets.

## CONTEXTUAL CLUSTERS:
- **User Profile**: ${context.userInfo.name} | ${context.userInfo.branch} | Sem ${context.userInfo.semester}
- **Real-time**: ${context.currentTime} | ${context.dayOfWeek}
- **Knowledge Base**: ${JSON.stringify(context.universityInfo, null, 1)}
- **Personal Schedule**: ${JSON.stringify(context.timetable, null, 1)}

## RESPONSE ARCHITECTURE:
- **Direct Intel**: Definitive answer first.
- **Senior Hack**: A Phase 3 tactical pro-tip or hidden campus secret.
- **Actionable Link/Maps**: fresources.tech, official portals, or Google Maps URLs.
- **Suggested Prompts**: 3 chips to sustain the intelligence loop.`;


        // --- CONSTRUCT FULL CONVERSATION CONTENTS ---
        // We inject the system instructions into a hidden context block at the start
        const contents = [];
        
        // Add Chat History (from frontend)
        if (history && history.length > 0) {
            // Filter to last 10 exchanges for token efficiency if needed, but here we take all
            contents.push(...history.slice(-10)); 
        }

        // Add Current Message with the MASSIVE System Context prepended (to ensure it's always top-of-mind)
        const currentMessageText = `[SYSTEM CONTEXT: ${systemPrompt}]\n\nUSER MESSAGE: ${message}`;
        contents.push({
            role: "user",
            parts: [{ text: currentMessageText }]
        });

        // --- CALL OPENROUTER (DeepSeek R1 Chimera) ---
        const apiUrl = "https://openrouter.ai/api/v1/chat/completions";
        
        console.log(`--- [GIGA-BRAIN R1] Request (OpenRouter) ---`);
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`,
                'HTTP-Referer': 'https://dtu-timetable.onrender.com', // Optional but good for OpenRouter
                'X-Title': 'DTU Giga-Brain Bot'
            },
            body: JSON.stringify({ 
                model: "tngtech/deepseek-r1t2-chimera:free",
                messages: [
                    ... (history || []).map(h => ({ 
                        role: h.role === "model" ? "assistant" : "user", 
                        content: h.parts[0].text 
                    })),
                    { role: "user", content: `[SYSTEM CONTEXT: ${systemPrompt}]\n\nUSER MESSAGE: ${message}` }
                ]
            })
        });

        const data = await response.json();

        if (response.ok) {
            if (data.choices && data.choices[0]?.message?.content) {
                return res.json({ success: true, response: data.choices[0].message.content });
            }
            console.error("OpenRouter Response Struct Error:", JSON.stringify(data));
            return res.status(500).json({ success: false, message: 'Giga-Brain R1 returned an unreadable response.' });
        } else {
            console.error("OpenRouter API Error:", JSON.stringify(data));
            const detail = data.error?.message || 'Unknown Provider Error';
            let userMessage = `Giga-Brain R1 Error (${response.status}): ${detail}`;
            if (response.status === 429) userMessage += " | TIP: OpenRouter free tier limit hit.";
            return res.status(response.status).json({ success: false, message: userMessage });
        }

    } catch (error) {
        console.error("Super AI Server Error:", error);
        res.status(500).json({ success: false, message: `Super Brain Error: ${error.message}` });
    }
});

app.listen(PORT, () => {
    console.log(`--- Server Started ---`);
    console.log(`Port: ${PORT}`);
});
