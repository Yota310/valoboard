const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
                title: ["Chakra Petch"],
                body: ["Sawarabi Mincho"],
                body1: ["DotGothic16"],
            },

            colors: {
                "text-black": "#3f3f3f",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
