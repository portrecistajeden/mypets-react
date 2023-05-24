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
            },
            animation: {
              'add-pet-pulse': 'add-pet-pulse 0.8s linear 1' 
            },
            keyframes: {
              "add-pet-pulse": {
                'from to': {borderRadius: '64px'},
                '50%': {borderRadius: '16px'},
              }
            }
        },
     },
     plugins: [],
}

