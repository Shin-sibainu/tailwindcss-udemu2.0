module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body: "#050505",
        selectedText: "#A3A3FF",
        theme: "#5c318c",
        nav: "#404053",
        secondary: "#9191A4",
        badge: "#3F3F51",
        inputBorder: "#565666",
        input: "#2A2A33",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// "build": "npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch"
