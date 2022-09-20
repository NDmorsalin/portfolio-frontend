/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            keyframes: {
                sticky: {
                    '0%': { opacity: '0', transform: 'translate3d(0,-100%,0)' },
                    '100%': { opacity: '1', transform: 'translateZ(0)' },
                },
            },
            animation: {
                sticky: 'sticky 0.5s ease-in-out',
            },
        },
        fontFamily: {
            sans: ['Roboto'],
            roboto: ['Roboto', 'sans-serif'],
        },
    },
    plugins: [],
};
