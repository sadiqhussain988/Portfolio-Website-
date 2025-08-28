// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        dimlight: {
          "0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92%": {
            color: "#0e3742",
            textShadow: "none"
          },
          "18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 92.1%, 100%": {
            color: "#fff",
            textShadow: "0 0 10px #03bcf4, 0 0 20px #03bcf4"
          }
        }
      },
      animation: {
        dimlight: "dimlight 5s infinite"
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".box-reflect": {
            /* -webkit-box-reflect is vendor-specific and may only work in some browsers */
            "-webkit-box-reflect": "below 1px linear-gradient(transparent, rgba(0,0,0,0.25))"
          }
        },
        { variants: ["responsive"] }
      );
    }
  ]
};
