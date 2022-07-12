import type { AppProps } from "next/app"
import Script from "next/script"
import "../styles/index.css"
import "../config/mobx"
import "../config/service-worker"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <Component {...pageProps} />
    </>
  )
}
