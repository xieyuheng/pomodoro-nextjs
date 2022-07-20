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
        <div className="md:mt-10 mt-4 flex flex-col items-center">
          <RegisterStart state={state} />
        </div>
      )}
    </Observer>
  )
}
