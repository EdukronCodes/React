import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  user: { name: "User", avatar: "" },
  settings: { systemPrompt: "You are a helpful assistant.", model: "gpt-3.5-turbo" },
  conversations: [
    { id: "default", title: "Default", messages: [ { sender: "bot", text: "Hello! How can I help you today?" } ] }
  ],
  activeConversationId: "default"
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_SETTINGS":
      return { ...state, settings: action.settings };
    case "ADD_CONVERSATION":
      return { ...state, conversations: [...state.conversations, action.conversation], activeConversationId: action.conversation.id };
    case "SET_ACTIVE_CONVERSATION":
      return { ...state, activeConversationId: action.id };
    case "ADD_MESSAGE":
      return {
        ...state,
        conversations: state.conversations.map(conv =>
          conv.id === state.activeConversationId
            ? { ...conv, messages: [...conv.messages, action.message] }
            : conv
        )
      };
    case "SET_CONVERSATIONS":
      return { ...state, conversations: action.conversations };
    default:
      return state;
  }
}

const ChatContext = createContext();
export function ChatProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <ChatContext.Provider value={{ state, dispatch }}>{children}</ChatContext.Provider>;
}
export function useChat() {
  return useContext(ChatContext);
} 