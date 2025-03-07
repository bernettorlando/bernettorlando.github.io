import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
        const currentTheme = window.localStorage.getItem('theme') || 'light';
        setIsDarkMode(currentTheme === 'dark');
        document.documentElement.setAttribute('data-theme', currentTheme);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    const newTheme = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
  }

  return (
      <div>
          <button onClick={toggleTheme} className={isDarkMode ? "dark-mode" : "light-mode"} >
            {isDarkMode ? "Light" : "Dark"}
          </button>
      </div>
  );
}

export default ThemeToggle;
