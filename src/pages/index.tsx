import Head from "next/head"
import Pomodoro from "../views/pomodoro/Pomodoro"
import { PomodoroState as State } from "../views/pomodoro/PomodoroState"

export default function Home() {
  const state = new State()

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
