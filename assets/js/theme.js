// Define constants for theme values
const THEMES = {
  COLORFUL: '1',
  LIGHT: '2',
  DARK: '3',
};

// Get the toggle theme button element
const toggleThemeButton = document.getElementById('toggle-theme-btn');

/**
 * Sets the theme for the document body and saves it to localStorage.
 * @param {string} theme - The theme to set.
 */
function setTheme(theme) {
  document.body.className = `theme-${theme}`;
  localStorage.setItem('theme', theme);
  updateThemeButtonClass(theme);
}

/**
 * Retrieves the current theme from localStorage.
 * @returns {string} The current theme.
 */
function getCurrentTheme() {
  return localStorage.getItem('theme') || THEMES.COLORFUL;
}

/**
 * Updates the button class based on the current theme.
 * @param {string} theme - The current theme.
 */
function updateThemeButtonClass(theme) {
  const button = toggleThemeButton.querySelector('button');
  button.className = button.className.replace(/theme-\d/g, `theme-${theme}`);
  button.classList.add(`theme-${theme}`);
}

/**
 * Initializes the theme based on saved preferences.
 */
function initializeTheme() {
  const savedTheme = getCurrentTheme();
  setTheme(savedTheme);
}

// Event listener for the toggle theme button
toggleThemeButton.addEventListener('click', () => {
  const currentTheme = getCurrentTheme();
  const nextTheme = currentTheme === THEMES.DARK ? THEMES.COLORFUL : (parseInt(currentTheme) + 1).toString();
  setTheme(nextTheme);
});