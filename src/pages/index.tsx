import { useState } from "react"
import Head from "next/head"
import Pomodoro from "../components/pomodoro/Pomodoro"
import PomodoroLoading from "../components/pomodoro/PomodoroLoading"
import { PomodoroState as State } from "../components/pomodoro/PomodoroState"
import { SwitchTransition, CSSTransition } from "react-transition-group"

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
      <SwitchTransition>
        <CSSTransition
          in={loaded}
          timeout={500}
          classNames={{
            enter: "transform opacity-30",
            enterActive: "transform opacity-100",
            exit: "transform opacity-30",
            exitActive: "transform opacity-100",
          }}
        >
          {loaded ? (
            <Pomodoro state={state} />
          ) : (
            <PomodoroLoading state={state} />
          )}
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}
