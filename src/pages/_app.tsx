import type { AppProps } from "next/app"
import Script from "next/script"
import Head from "next/head"
import "../styles/index.css"
import "../lib/mobx"
import "../lib/service-worker"

declare global {
  var tailwind: any
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pomodoro</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
