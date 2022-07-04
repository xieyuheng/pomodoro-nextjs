import Head from "next/head"
import Pomodoro from "../components/pomodoro/Pomodoro"
import { PomodoroState as State } from "../components/pomodoro/PomodoroState"

const state = new State()

export default function Home() {
  return (
    <div>
      <Head>
        <title>🍅 Pomodoro</title>
        <meta name="description" content="🍅 A Pomodoro timer." />
      </Head>

      <Pomodoro state={state} />
    </div>
  )
}
