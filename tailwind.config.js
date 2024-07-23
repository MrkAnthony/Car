module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript and TypeScript files in the src directory
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pattern': "url('/background/background.jpg')",
      }
    },
  },
  plugins: [require('daisyui')],

  daisyui: {
    theme: [
        "business",


    ]
  }
};
