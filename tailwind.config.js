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
                'background': '#c0d3c5',
                'primary': '#78b09a',
                'secondary': '#f2f2f2',
                'accent': '#d1ae9f'
            }
        },
     },
     plugins: [],
}

