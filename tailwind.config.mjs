/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
      ],
    theme: {
        extend: {
            colors: {
                lighHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11001F'
            },
            fontFamily: {
                roboto: ["roboto", "sans-serif"],
                play: ["play", "sans-serif"],
                shareTech: ["shareTech", "sans-serif"],
              },
        },
    },
    plugins: [],
}