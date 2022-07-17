import type { AppProps } from "next/app"
import Script from "next/script"
import "../styles/index.css"
import "../lib/mobx"
import { tailwindConfig } from "../lib/tailwind"
import "../lib/service-worker"

import { setup, strict, voidSheet } from "twind"

declare global {
  var tailwind: any
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        type="module"
        src="https://cdn.skypack.dev/twind/shim"
        onLoad={() => {
          setup({
            mode: strict, // throw errors for invalid rules (default: warn)
            // hash: true, // hash all generated class names (default: false)
            theme: tailwindConfig.theme,
          })
        }}
      />

      <Component {...pageProps} />
    </>
  )
}
