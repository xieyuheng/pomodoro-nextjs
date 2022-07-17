import type { AppProps } from "next/app"
import Script from "next/script"
import "../styles/index.css"
import "../lib/mobx"
import { tailwindConfig } from "../lib/tailwind"
import "../lib/service-worker"

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
