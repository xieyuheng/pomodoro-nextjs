const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
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
    extend: {
      colors: {
        gray: colors.stone,
        focus: colors.red,
        break: colors.sky,
        recess: colors.violet,
      },
      transitionDelay: {
        0: "0ms",
        2000: "2000ms",
      },
    },
  },
}
