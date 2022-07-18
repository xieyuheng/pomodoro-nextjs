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
          <Menu>
            <Menu.Button>Show</Menu.Button>

            <Menu.Items>
              <Menu.Item>
                <div>Item 1</div>
              </Menu.Item>
              <Menu.Item>
                <div>Item 2</div>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      )}
    </Observer>
  )
}
