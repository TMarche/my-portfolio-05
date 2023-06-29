/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                spartan: ["League Spartan", "sans-serif"],
                lobster: ["Lobster", "sans-serif"],
                "roboto-slab": ["Roboto Slab", "serif"],
                roboto: ["Roboto", "sans-serif"],
            },
        },
    },
    plugins: [],
};
