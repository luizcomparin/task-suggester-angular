/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}",],
    theme: {
        extend: {
            colors: {
                "dark-green": "#002e34",
                "2dark-green": "#003941",
                "light-green": "#00755c",
                "middle-green": "#004443",

            },
            boxShadow: {
                '3d': '0 5px 0 #000',
                '3d2': '5px 5px 0 #000',
            },
            keyframes: {
                slideforward: {
                    'from': {
                        'background-position': 'left center '
                    },
                    'to': {
                        'background-position': 'center right'
                    },
                },
                slidebackwards: {
                    'from': {
                        'background-position': 'center right'
                    },
                    'to': {
                        'background-position': 'left center'
                    },
                },

                movedivleft: {
                    'from': {
                        'transform': 'translateX(0px)'
                    },
                    'to': {
                        'transform': 'translateX(-1211px)'
                    },
                },
                movedivright: {
                    'from': {
                        'transform': 'translateX(-1211px)'
                    },
                    'to': {
                        'transform': 'translateX(0px)'
                    },
                }

            },
            animation: {
                'slideforward': 'slideforward .5s ease forwards ',
                'slidebackwards': 'slidebackwards .5s ease forwards ',
                'movedivleft': 'movedivleft .5s ease forwards',
                'movedivright': 'movedivright .5s ease forwards',
            },
        },
    },
    plugins: [],
}
