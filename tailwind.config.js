module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            // animation: {
            //     text: 'text 5s ease infinite ',
            // },
            // keyframes: {
            //     text: {
            //         '0%, 100%': {
            //             'background-size': '200% 200%',
            //             'background-position': 'left center',
            //         },
            //         '50%': {
            //             'background-size': '200% 200%',
            //             'background-position': 'right center',
            //         },
            //     },
            // },
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

            },
            colors: {
                primary: '#F5F5F5',
                secondary: '#393a3b',
                blackground: '#0D1117',
                highlight: '#FFFF00',
            }

        },
    },
    plugins: [],
};