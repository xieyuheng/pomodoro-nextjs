import Head from "next/head"
import Pomodoro from "../components/pomodoro/Pomodoro"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pomodoro</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Pomodoro />
    </div>
  )
}