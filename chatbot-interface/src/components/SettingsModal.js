import React, { useState } from "react";

function SettingsModal({ open, onClose, settings, onSave }) {
  const [localSettings, setLocalSettings] = useState(settings);
  if (!open) return null;
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Chatbot Settings</h2>
        <label>
          System Prompt:
          <textarea
            value={localSettings.systemPrompt}
            onChange={e => setLocalSettings(s => ({ ...s, systemPrompt: e.target.value }))}
          />
        </label>
        <label>
          Model:
          <select
            value={localSettings.model}
            onChange={e => setLocalSettings(s => ({ ...s, model: e.target.value }))}
          >
            <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
            <option value="gpt-4">gpt-4</option>
          </select>
        </label>
        <div className="modal-actions">
          <button onClick={() => onSave(localSettings)}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default SettingsModal; 