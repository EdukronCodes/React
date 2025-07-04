import React, { useState, useRef, useEffect } from "react";

const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY"; // Replace with your OpenAI API key
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(OPENAI_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            ...[...messages, userMessage].map((msg) => ({
              role: msg.sender === "user" ? "user" : "assistant",
              content: msg.text,
            })),
          ],
        }),
      });
      if (!response.ok) throw new Error("API Error");
      const data = await response.json();
      const botReply = data.choices?.[0]?.message?.content || "Sorry, I didn't get that.";
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (err) {
      setError("Failed to get response. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && !loading) {
      sendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-history">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender}`}>
            <span>{msg.text}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {error && <div className="error">{error}</div>}
      <div className="input-row">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInputKeyDown}
          placeholder="Type your message..."
          disabled={loading}
        />
        <button onClick={sendMessage} disabled={loading || !input.trim()}>
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default Chatbot; 