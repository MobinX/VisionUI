module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: require('daisyui/colors')
    },
  },
  plugins: [
    require('daisyui'),
  ],
  options: {
    safelist: [
      /data-theme$/,
    ]
  },
}
