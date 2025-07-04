import React, { useState } from "react";
import Chatbot from "./Chatbot";
import { ChatProvider } from "./context/ChatContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import ConversationList from "./components/ConversationList";
import UserProfile from "./components/UserProfile";
import ThemeSwitcher from "./components/ThemeSwitcher";
import SettingsModal from "./components/SettingsModal";
import EditProfileModal from "./components/EditProfileModal";

function AppShell() {
  const { theme, setTheme } = useTheme();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  // These will be managed by context in Chatbot
  return (
    <div className={`app-container ${theme}`}>
      <aside className="sidebar">
        <div className="sidebar-header">
          <UserProfile user={{ name: "User" }} onEdit={() => setProfileOpen(true)} />
          <ThemeSwitcher theme={theme} onToggle={() => setTheme(theme === "dark" ? "light" : "dark")} />
        </div>
        <ConversationList conversations={[]} activeId={"default"} onSelect={() => {}} onNew={() => {}} />
        <button className="settings-btn" onClick={() => setSettingsOpen(true)}>⚙️ Settings</button>
      </aside>
      <main className="main-content">
        <h1>AI-Powered Chatbot</h1>
        <Chatbot
          onOpenSettings={() => setSettingsOpen(true)}
          onOpenProfile={() => setProfileOpen(true)}
        />
      </main>
      <SettingsModal open={settingsOpen} onClose={() => setSettingsOpen(false)} settings={{}} onSave={() => {}} />
      <EditProfileModal open={profileOpen} user={{ name: "User" }} onSave={() => {}} onClose={() => setProfileOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ChatProvider>
        <AppShell />
      </ChatProvider>
    </ThemeProvider>
  );
}

export default App; 