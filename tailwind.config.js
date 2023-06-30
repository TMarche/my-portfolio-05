/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    safelist: [
        "bg-tribute-01",
        "bg-node-flow-02",
        "bg-bintendo-02-xs",
        "bg-interactive-fretboard-01-xs",
        "bg-interactive-fretboard-01-s",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "tribute-01": "url(/Projects/Tribute01.png)",
                "node-flow-02": "url(/Projects/NodeFlow02.png)",
                "bintendo-02-xs": "url(/Projects/Bintendo02-xs.png)",
                "interactive-fretboard-01-s":
                    "url(/Projects/InteractiveFretboard01-s.png)",
                "interactive-fretboard-01-xs":
                    "url(/Projects/InteractiveFretboard01-xs.png)",
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
