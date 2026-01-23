/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./privacy.html",
        "./terms.html",
        "./_layouts/**/*.html",
        "./_includes/**/*.html",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Minimalist palette
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
