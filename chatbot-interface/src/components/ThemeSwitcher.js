import React from "react";

function ThemeSwitcher({ theme, onToggle }) {
  return (
    <button className="theme-switcher" onClick={onToggle} title="Toggle theme">
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}

export default ThemeSwitcher; 