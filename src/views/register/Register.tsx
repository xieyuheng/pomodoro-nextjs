import classes from "classnames"
import { Observer } from "mobx-react-lite"
import Head from "next/head"
import { useMount } from "ahooks"
import { autorun } from "mobx"

export default function Register() {
  return <Observer>{() => <div>Register</div>}</Observer>
}
