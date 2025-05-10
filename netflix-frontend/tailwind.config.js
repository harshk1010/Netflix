/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,  // ✅ Ensures Tailwind takes priority over Flowbite
    content: [
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };