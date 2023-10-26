/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["src/*.html"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        extend: {
            height: {
                "50v": "50vh",
                "80v": "80vh",
                "60v": "60vh"
            },
            colors: {
                lightGray: "#F9F7F7",
                textBlue: "#3F72AF",
                darkBlue: "#112D4E",
                textColor: "#2F4858",
                lightGreen: '#949c8c',
                darkGreen: "#535f32",
                footerColor: "#3B5E3E",
                navy_dark: "#002D62",
                navy_light: "#13274F",
                duck_blue: "#007791"
            },
        },
    },
    plugins: [],
};
