const resolveConfig = require("tailwindcss/resolveConfig")
const colors = require("tailwindcss/colors")

export const tailwindConfig = resolveConfig({
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
})
