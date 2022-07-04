const resolveConfig = require("tailwindcss/resolveConfig")
import config from "../../tailwind.config.js"

export const tailwind = resolveConfig(config)
