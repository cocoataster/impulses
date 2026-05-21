/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./privacy.html",
        "./terms.html",
        "./in-app-purchases.html",
        "./_layouts/**/*.html",
        "./_includes/**/*.html",
        "./_includes/*.html",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                apple: {
                    canvas: '#f5f5f7',
                    surface: '#ffffff',
                    text: '#1d1d1f',
                    muted: '#6e6e73',
                    blue: '#0071e3',
                    'blue-dark': '#2997ff',
                    divider: 'rgba(0, 0, 0, 0.08)',
                    'surface-dark': '#1c1c1e',
                    'canvas-dark': '#000000',
                    'divider-dark': 'rgba(255, 255, 255, 0.12)',
                },
                brand: {
                    coral: '#e85d4a',
                    'coral-light': '#ff7a66',
                    peach: '#fff4ef',
                    'peach-dark': '#2a1f1c',
                },
            },
            fontFamily: {
                sans: [
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"SF Pro Text"',
                    '"SF Pro Display"',
                    'system-ui',
                    'sans-serif',
                ],
            },
            borderRadius: {
                appicon: '22%',
            },
        },
    },
    plugins: [],
}
