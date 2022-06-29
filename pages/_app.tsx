import type { AppProps } from "next/app"
import "../styles/index.css"
import "../vender/mobx"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
