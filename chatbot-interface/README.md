# AI-Powered Chatbot Interface

## Overview
A modern, responsive chatbot UI built with ReactJS, integrating the OpenAI API for intelligent, real-time responses.

## Architecture
- **React Functional Components & Hooks:** The UI is built using functional components (`App`, `Chatbot`) and React hooks (`useState`, `useEffect`, `useRef`) for state and side-effect management.
- **OpenAI API Integration:** User messages are sent to the OpenAI API, and responses are displayed in real time.
- **Controlled Input & Message History:** The input field is controlled by React state. All messages (user and bot) are stored in a message history array.
- **Auto-Scrolling:** The chat window auto-scrolls to the latest message using a `ref` and `useEffect`.
- **Loading & Error Handling:** Shows a loading indicator while waiting for the API and displays errors with retry logic.
- **Responsive CSS3:** The layout adapts for mobile and desktop using modern CSS.

## File Structure
```
chatbot-interface/
  public/
    index.html
  src/
    App.js
    Chatbot.js
    index.js
    styles.css
  package.json
  README.md
```

## Setup
1. Replace `YOUR_OPENAI_API_KEY` in `Chatbot.js` with your actual OpenAI API key.
2. Use a React build tool (like Vite or Create React App) to run the project.

## Features
- Interactive chat UI
- Real-time OpenAI responses
- Message history & auto-scroll
- Loading and error states
- Responsive design 