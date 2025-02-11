// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode); // Store preference
    document.dispatchEvent(new CustomEvent('themeChange', { detail: { darkMode: isDarkMode } }));
}

// Function to apply the saved or system preference for dark mode
function applyDarkModePreference() {
    const savedDarkMode = localStorage.getItem('darkMode');
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedDarkMode === 'true' || (savedDarkMode === null && prefersDarkMode)) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Add event listener to the dark mode toggle button
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.dark-mode-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleDarkMode);
        toggleButton.setAttribute('aria-pressed', document.body.classList.contains('dark-mode'));
    }

    // Apply the saved or system preference for dark mode
    applyDarkModePreference();

    // Update ARIA attribute when theme changes
    document.addEventListener('themeChange', (event) => {
        if (toggleButton) {
            toggleButton.setAttribute('aria-pressed', event.detail.darkMode);
        }
    });
});

// Listen for changes in system preference and apply them
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (localStorage.getItem('darkMode') === null) {
        if (event.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }
});