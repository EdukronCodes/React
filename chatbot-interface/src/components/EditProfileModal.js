import React, { useState } from "react";

function EditProfileModal({ open, user, onSave, onClose }) {
  const [name, setName] = useState(user.name);
  const [avatar, setAvatar] = useState(user.avatar);
  if (!open) return null;
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Edit Profile</h2>
        <label>
          Name:
          <input value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Avatar URL:
          <input value={avatar} onChange={e => setAvatar(e.target.value)} />
        </label>
        <div className="modal-actions">
          <button onClick={() => onSave({ name, avatar })}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default EditProfileModal; 