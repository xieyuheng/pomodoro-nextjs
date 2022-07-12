import type { AppProps } from "next/app"
import Script from "next/script"
import "../styles/index.css"
import "../config/mobx"
import { tailwindConfig } from "../config/tailwind"
import "../config/service-worker"

declare global {
  var tailwind: any
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://cdn.tailwindcss.com"
        onLoad={() => {
          const colors = require("tailwindcss/colors")
          window.tailwind.config = tailwindConfig
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
