import { useState } from "react"
import Head from "next/head"
import Pomodoro from "../components/pomodoro/Pomodoro"
import PomodoroLoading from "../components/pomodoro/PomodoroLoading"
import { PomodoroState as State } from "../components/pomodoro/PomodoroState"

export default function Home() {
  const state = new State()

  const [loaded, setLoaded] = useState(false)
  setTimeout(() => {
    setLoaded(true)
  }, 500)

  return (
    <div>
      <Head>
        <title>🍅 Pomodoro</title>
        <meta name="description" content="🍅 A Pomodoro timer." />
      </Head>

      {loaded ? <Pomodoro state={state} /> : <PomodoroLoading state={state} />}
    </div>
  )
}
