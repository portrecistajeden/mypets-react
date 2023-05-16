/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
    theme: {
        extend: {
            transitionProperty: {
                'width': 'width'
            },
            colors: {
                'primary': '#B2A4FF',
                'secondary': '#FFB4B4',
                'tetrary': '#FFDEB4',
                'accent': '#FDF7C3'
            }
        },
     },
     plugins: [],
}

