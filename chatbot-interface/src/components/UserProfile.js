import React from "react";

function UserProfile({ user, onEdit }) {
  return (
    <div className="user-profile">
      <img
        src={user.avatar || "https://ui-avatars.com/api/?name=" + encodeURIComponent(user.name)}
        alt="avatar"
        className="avatar"
      />
      <span>{user.name}</span>
      <button onClick={onEdit} title="Edit Profile">✎</button>
    </div>
  );
}

export default UserProfile; 