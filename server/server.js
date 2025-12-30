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
        const API_KEY = process.env.GEMINI_API_KEY;
        if (!API_KEY) {
            return res.json({ success: false, message: 'Missing API Key in Environment' });
        }

        // Fetch list of models from Google to see what's actually available
        const listUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;
        const response = await fetch(listUrl);
        const data = await response.json();

        res.json({ 
            success: true, 
            message: 'AI Proxy is active.',
            diagnostics: {
                hasKey: true,
                nodeVersion: process.version,
                googleResponse: response.ok ? 'Authorized' : 'Unauthorized',
                availableModels: data.models ? data.models.map(m => m.name.replace('models/', '')) : 'Unable to list models',
                rawError: response.ok ? null : data
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
        const API_KEY = process.env.GEMINI_API_KEY;

        if (!API_KEY) {
            return res.status(500).json({ success: false, message: 'AI Error: GEMINI_API_KEY is missing from Render environment variables.' });
        }

        // --- GIGA-BRAIN SYSTEM PROMPT (Logic Density: Ultra) ---
        const systemPrompt = `You are the "DTU Giga-Brain", an ultra-high-intelligence academic authority and legendary senior mentor at Delhi Technological University. 

## LOGICAL OPERATING SYSTEM (Giga-OS)60: 1. **Chain-of-Thought (CoT) + Proactive Strategy**: For every query, internalize this 5-step reasoning path:
   - **Intent Focus**: Detect if user needs Admission data, Career/Placement advice, Campus Navigation, Elective choices, Study Resources, or Schedule management.
   - **Cross-Referencing**: Connect the user's branch (${context.userInfo.branch}) to specialized Labs, Tech Teams, and relevant Startups in the knowledge base.
   - **Giga-Extraction**: Pull from "Senior Hacks", "Electives Guide", or "Resource Map" clusters.
   - **Proactive Prediction**: Anticipate the next friction point. If they ask about a lab, tell them the venue AND how to get the lab manual. If asking about an elective, warn them about registration timing.
   - **Constraint Check**: Ensure tone is authoritative yet approachable. NO triple asterisks. Use **bold**.
 
 2. **BREVITY & IMPACT**: 
    - Initial Greetings: Warm, senior-like, under 15 words. Keep it sharp.
    - Use bullet points for structured data (e.g., GP stats).
 
 3. **EXPERT DOMAINS**:
    - **Electives**: Suggest high-scoring AEC/VAC/GEC based on GP stats in data.js.
    - **Resources**: Direct students to specific fresources.tech branch paths (e.g., /dtu/cse).
    - **Admissions**: Use JAC Delhi 2024 Round 5 cutoffs for precision advice.
    - **Placements**: Quote 2024-25 trends (FinTech, AI roles).
    - **Navigation**: Provide Google Maps URLs for any landmark mentioned.
 
 4. **INVERSE PROMPTING (Interactive Loop)**:
    - Mandate: You MUST end every response with a hidden [SUGGESTED_PROMPTS] block.
    - Strategy: These questions should bridge the gap to the next logical step (Inverse Prompting). 
    - Format: [SUGGESTED_PROMPTS: "Question 1", "Question 2", "Question 3"]
 
 ## CONTEXTUAL CLUSTERS:
 - **User**: ${context.userInfo.name} | ${context.userInfo.branch} | Sem ${context.userInfo.semester}
 - **Environment**: ${context.currentTime} | ${context.dayOfWeek}
 - **Knowledge Base**: ${JSON.stringify(context.universityInfo, null, 1)}
 - **Personal Schedule**: ${JSON.stringify(context.timetable, null, 1)}
 
 ## RESPONSE ARCHITECTURE:
 - **Direct Intel**: The primary fact.
 - **Senior Hack**: A tactical pro-tip (The "Phase 3" intelligence).
 - **Actionable Link/Maps**: fresources.tech, portal links, or maps.
 - **Suggested Prompts**: 3 chips to guide the user further.`;


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

        // --- CALL GEMINI ---
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`;
        
        console.log(`--- [SUPER AI] Request ---`);
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents })
        });

        const data = await response.json();

        if (response.ok) {
            if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
                return res.json({ success: true, response: data.candidates[0].content.parts[0].text });
            }
            console.error("Super AI Response Struct Error:", JSON.stringify(data));
            return res.status(500).json({ success: false, message: 'Super AI returned an unreadable response.' });
        } else {
            console.error("Google API Error:", JSON.stringify(data));
            const detail = data.error?.message || 'Unknown API Error';
            let userMessage = `Super AI Error (${response.status}): ${detail}`;
            if (response.status === 429) userMessage += " | TIP: Free Tier quota hit. Wait 60s.";
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
