import type { AppProps } from "next/app"
import "../styles/index.css"
import "../config/mobx"
import "../config/service-worker"
import "../config/howler"
import Script from "next/script"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <Component {...pageProps} />
    </>
  )
}
