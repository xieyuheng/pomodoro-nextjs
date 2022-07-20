import classes from "classnames"
import Head from "next/head"
import { useMount } from "ahooks"
import { autorun } from "mobx"
import { Observer } from "mobx-react-lite"
import { RegisterState as State } from "./RegisterState"
import RegisterStart from "./RegisterStart"

export default function Register() {
  const state = new State()

  return (
    <Observer>
      {() => (
        <div className="flex h-full flex-col items-center justify-center px-4">
          <RegisterStart state={state} />
        </div>
      )}
    </Observer>
  )
}
