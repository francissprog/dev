/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      zIndex: {
        '10': 10,
      },
      boxShadow: {
        'tooltip': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '1/2': '50%',
      },
    },
  },
  plugins: [],
};
