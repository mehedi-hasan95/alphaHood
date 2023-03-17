/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            fontSize: {
                "3xlm": ["28px", "32px"],
            },
            colors: {
                "custom-black": "#18181B",
                "custom-blue": "#0858F7",
                "custom-gray": "#F3F3F3",
                mono: "#7A7A85",
            },
        },
    },
    plugins: [],
};
