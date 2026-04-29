# NurseIQ Study Coach

A nursing study app with built-in quizzes, daily shuffled flashcards, and optional AI-generated NCLEX-style questions.

## Project Structure

```text
NurseIQ-Study-Coach/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── frontend/
    ├── index.html
    ├── app.js
    └── styles.css
```

## What Is Public

- `frontend/` can be hosted publicly on GitHub Pages.
- `backend/` can be hosted publicly on Render, Railway, or another Node host.
- Your real `.env` file must stay private and is ignored by git.

## Local Setup

1. Install backend dependencies:

   ```bash
   cd backend
   npm install
   ```

2. Create `backend/.env` from `backend/.env.example`:

   ```env
   GEMINI_API_KEY=your-gemini-api-key
   AI_MODEL=gemini-2.5-flash
   PORT=3000
   ```

3. Start the backend:

   ```bash
   npm start
   ```

4. Open the app:

   ```text
   http://localhost:3000
   ```

The backend serves the `frontend/` folder during local development.

## AI Endpoints

- `POST /generate-questions`
- `POST /upload-file`

Both return:

```json
{
  "questions": [
    {
      "prompt": "",
      "options": ["", "", "", ""],
      "answer": 0,
      "rationale": ""
    }
  ]
}
```

## GitHub Pages + Backend

GitHub Pages only hosts the frontend. For public AI question generation:

1. Deploy `backend/` to Render or Railway.
2. Add your API key as a private environment variable on that host.
3. On the GitHub Pages site, set the backend URL:

```js
localStorage.setItem("nurseiq-backend-url", "https://your-backend-url.onrender.com");
```

Users can then generate AI questions through your backend without seeing your API key.
