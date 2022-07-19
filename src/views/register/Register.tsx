import classes from "classnames"
import Head from "next/head"
import { useMount } from "ahooks"
import { autorun } from "mobx"
import { RegisterState as State } from "./RegisterState"

export default function Register() {
  const state = new State()

  return <>Register</>
}
