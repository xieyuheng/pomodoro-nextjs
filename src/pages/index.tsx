import Head from "next/head"
import dynamic from "next/dynamic"

const Pomodoro = dynamic(() => import("../views/pomodoro/Pomodoro"), {
  ssr: false,
})

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pomodoro</title>
        <meta name="description" content="🍅 A Pomodoro timer." />
      </Head>

      <Pomodoro />
    </div>
  )
}
