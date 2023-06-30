/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    safelist: ["bg-node-flow-02", "bg-bintendo-02-xs"],
    theme: {
        extend: {
            backgroundImage: {
                "node-flow-02": "url(/Projects/NodeFlow02.png)",
                "bintendo-02-xs": "url(/Projects/Bintendo02-xs.png)",
            },

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
