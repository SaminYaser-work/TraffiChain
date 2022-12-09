/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("flowbite/plugin")],
    darkMode: "class",
    variants: {
        backgroundColor: ["responsive", "hover", "focus", "active", "disabled"],
        textColor: ["responsive", "hover", "focus", "active", "disabled"],
    },
};
