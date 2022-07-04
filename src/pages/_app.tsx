import type { AppProps } from "next/app"
import "../styles/index.css"
import "../config/mobx"
import "../config/service-worker"
import "../config/howler"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
