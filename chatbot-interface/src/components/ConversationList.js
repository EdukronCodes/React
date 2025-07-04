import React from "react";

function ConversationList({ conversations, activeId, onSelect, onNew }) {
  return (
    <div className="conversation-list">
      <div className="conversation-list-header">
        <span>Conversations</span>
        <button onClick={onNew} title="New Conversation">+</button>
      </div>
      <ul>
        {conversations.map((conv) => (
          <li
            key={conv.id}
            className={conv.id === activeId ? "active" : ""}
            onClick={() => onSelect(conv.id)}
          >
            {conv.title || `Chat ${conv.id.slice(-4)}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConversationList; 