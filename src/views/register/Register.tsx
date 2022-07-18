import classes from "classnames"
import { Observer } from "mobx-react-lite"
import Head from "next/head"
import { useMount } from "ahooks"
import { autorun } from "mobx"
import { Menu } from "@headlessui/react"

export default function Register() {
  return (
    <Observer>
      {() => (
        <div>
          Register
        </div>
      )}
    </Observer>
  )
}
