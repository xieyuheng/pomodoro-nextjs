const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern:
        /(text|border|bg)-(red|sky|violet)-(50|100|200|300|400|500|600|700|800|900)/,
      variants: ["hover", "focus"],
    },
  ],
  theme: {
    fontFamily: {
      sans: [
        "Linux Biolinum O",
        "LXGW New Clear Gothic",
        "LXGW Clear Gothic",
        "sans-serif",
      ],
      serif: ["Linux Libertine O", "LXGW WenKai", "serif"],
      mono: [
        "Fira Code",
        // NOTE One Chinese character should equal to two English characters.
        "LXGW WenKai Larger",
        "monospace",
      ],
      logo: ["Bodoni Moda", "Source Han Serif SC", "serif"],
    },
    transitionDelay: {
      0: "0ms",
      2000: "2000ms",
    },
  },
}
