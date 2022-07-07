import Head from "next/head"
import Pomodoro from "../views/pomodoro/Pomodoro"

export default function Home() {
  return (
    <div>
      <Head>
        <title>🍅 Pomodoro</title>
        <meta name="description" content="🍅 A Pomodoro timer." />
      </Head>

      <Pomodoro />
    </div>
  )
}
