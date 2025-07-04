import React from "react";

function MessageBubble({ sender, text }) {
  // Simple markdown/code rendering (expand as needed)
  const renderText = () => {
    if (text.startsWith("```")) {
      return <pre>{text.replace(/```/g, "")}</pre>;
    }
    if (text.includes("**")) {
      return <span dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') }} />;
    }
    return <span>{text}</span>;
  };
  return (
    <div className={`message-bubble ${sender}`}>
      {renderText()}
    </div>
  );
}

export default MessageBubble; 