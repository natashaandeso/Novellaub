import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  // Check if user had a previous preference, otherwise default to light
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDark) {
      htmlElement.setAttribute('data-bs-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.setAttribute('data-bs-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button 
      onClick={() => setIsDark(!isDark)}
      className="btn theme-btn"
      style={{ fontSize: '1.2rem', border: 'none', background: 'transparent' }}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;