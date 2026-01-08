/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./pages/**/*.html"
    ],
    theme: {
        extend: {
            colors: {
                'navy-blue': '#0A2463',
                'sky-blue': '#3E92CC',
                'bright-blue': '#1E88E5',
                'dark-navy': '#1A1A2E',
                'neutral-gray': '#6B7280'
            },
            fontFamily: {
                'display': ['DM Sans', 'sans-serif'],
                'body': ['Inter', 'sans-serif']
            },
            maxWidth: {
                '8xl': '1440px'
            },
            animation: {
                'spin-slow': 'rotate 12s linear infinite',
                'marquee': 'marquee 20s linear infinite'
            },
            keyframes: {
                rotate: {
                    'from': { transform: 'rotate(0deg)' },
                    'to': { transform: 'rotate(360deg)' }
                },
                marquee: {
                    'from': { transform: 'translateX(0)' },
                    'to': { transform: 'translateX(-50%)' }
                }
            }
        }
    },
    plugins: []
}