const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

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
        const { message, context } = req.body;
        const API_KEY = process.env.GEMINI_API_KEY;

        if (!API_KEY) {
            return res.status(500).json({ success: false, message: 'AI Error: GEMINI_API_KEY is missing from Render environment variables.' });
        }

        const prompt = `You are "DTU Academic Bot", a helpful assistant for Delhi Technological University (DTU) students.
You have access to the following data for the user:
- Current Time: ${context.currentTime}
- Current Day: ${context.dayOfWeek}
- Timetable Data: ${JSON.stringify(context.timetable, null, 2)}
- University Info: ${JSON.stringify(context.universityInfo, null, 2)}

Instructions:
1. PRIMARY GOAL: Answer the user's specific question directly and accurately.
2. NAVIGATION: If the user is lost or asking for directions (e.g., "how to go to main gate"), provide the Google Maps link from the "navigation" or "landmarks" data immediately. Example: "You can find the Main Gate here: [DTU Main Gate](https://www.google.com/maps/search/DTU+Entrance+Gate)."
3. TIMETABLE: Only provide a full timetable summary if the user asks for it (e.g., "What is my schedule?" or "What classes today?"). If they ask about a specific class, just answer about that class.
4. INFO: Use "University Info" for questions about campus spots, mess timings, or general DTU facts.
5. TIP: Share student tips from "tips" ONLY when the user asks for advice or is a new student.
6. PERSISTENCE: If the user says they are lost, DO NOT show them their full timetable. Instead, help them with directions.
7. Tone: Helpful, professional, Indian English. Use Markdown for formatting and links.`;

        // Use gemini-flash-latest (alias for 1.5 Flash) from your available models list
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`;
        
        console.log(`--- AI Request ---`);
        console.log(`Endpoint: v1beta/gemini-flash-latest`);

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        const data = await response.json();

        if (response.ok) {
            if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
                return res.json({ success: true, response: data.candidates[0].content.parts[0].text });
            }
            console.error("Gemini Response Structure Weird:", JSON.stringify(data));
            return res.status(500).json({ success: false, message: 'AI returned empty or weird response.' });
        } else {
            // Handle specific Google API errors
            console.error("Google API Error:", JSON.stringify(data));
            const detail = data.error?.message || 'Unknown API Error';
            let userMessage = `Google API Error (${response.status}): ${detail}`;
            
            if (response.status === 429) {
                userMessage += " | TIP: You have hit the Free Tier limit or quota for this model. Try again in a minute, or check AI Studio to see if you can enable the Free Tier for this project.";
            }
            
            return res.status(response.status).json({ 
                success: false, 
                message: userMessage 
            });
        }

    } catch (error) {
        console.error("Server AI Error:", error);
        res.status(500).json({ success: false, message: `Internal Server Error: ${error.message}` });
    }
});

app.listen(PORT, () => {
    console.log(`--- Server Started ---`);
    console.log(`Port: ${PORT}`);
});
