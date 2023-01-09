module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx, html}"],
    theme: {
        extend: {
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-3deg)" },
                    "50%": { transform: "rotate(3deg)" }
                },
                fade: {
                    "0%": { opacity: 0 },

                    "100%": { opacity: 1 }
                },
            },
            animation: {
                wiggle: "wiggle 1000ms ease-in-out",
                fade: "fade 300ms ease-in-out",
                fadeSlow: "fade 1000ms ease-in-out",


            },
            colors: {
                primary: '#F5F5F5',
                secondary: '#393a3b',
                tertiary: '#ffbf00',
                quaternary: '#0D1117',
                blackground: '#0D1117',
                highlight: '#ffbf00',
            }

        },
    },
    plugins: [],
};