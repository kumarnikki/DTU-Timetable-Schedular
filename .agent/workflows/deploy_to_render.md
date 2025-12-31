---
description: Deploy Giga-Brain Updates to Render
---

# 🚀 Deploying to Render

Your local code has the new **DeepSeek AI**, **JAC 2025 Data**, and **Fixed Prompt Chips**.
To make these live on your website, you must push this code to GitHub and update your Render config.

## Step 1: Push Code to GitHub

Run these commands in your terminal:

```powershell
git add .
git commit -m "Upgrade: DeepSeek AI + JAC 2025 Data + Robust Parsing"
git push origin main
```

_(Render will automatically start building once you push)._

## Step 2: Update Render Config (CRITICAL)

For the new AI to work, Render needs your API Key.

1. Go to your [Render Dashboard](https://dashboard.render.com/).
2. Select your **Backend Service**.
3. Go to **Environment**.
4. Click **Add Environment Variable**:
   - **Key**: `OPENROUTER_API_KEY`
   - **Value**: _(Paste the key from your local .env file)_
5. Click **Save Changes**.

## Step 3: Verify

Once the build finishes (check "Events" tab in Render):

- Open your website.
- Hard Refresh (`Ctrl + Shift + R`).
- Ask "Tell me about JAC 2025" to verify the new brain is active.
