import classes from "classnames"
import { observer } from "mobx-react-lite"
import { RegisterState as State } from "./RegisterState"
import Link from "../../components/Link"

export default observer(function RegisterStart({ state }: { state: State }) {
  return (
    <form
      action="/api/register"
      method="post"
      className="flex flex-col space-y-2 text-xl"
    >
      <div className="font-logo text-2xl font-semibold md:text-3xl">
        {state.lang.zh && <div>注册</div>}
        {state.lang.en && <div>Register</div>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="username" className="py-2 font-sans">
          {state.lang.zh && <div>用户名</div>}
          {state.lang.en && <div>Username</div>}
        </label>

        <input
          id="username"
          name="username"
          className={classes(
            "w-full rounded-sm border-2 p-3 font-bold",
            `border-${state.theme.name}-200 text-${state.theme.name}-900`
          )}
          type="text"
          maxLength={32}
          spellCheck="false"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="name" className="py-2 font-sans">
          {state.lang.zh && <div>名字</div>}
          {state.lang.en && <div>Name</div>}
        </label>

        <input
          id="name"
          name="name"
          className={classes(
            "w-full rounded-sm border-2 p-3 font-bold",
            `border-${state.theme.name}-200 text-${state.theme.name}-900`
          )}
          type="text"
          maxLength={32}
          spellCheck="false"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="py-2 font-sans">
          {state.lang.zh && <div>电子邮箱</div>}
          {state.lang.en && <div>Email</div>}
        </label>

        <input
          id="email"
          name="email"
          className={classes(
            "w-full rounded-sm border-2 p-3 font-bold",
            `border-${state.theme.name}-200 text-${state.theme.name}-900`
          )}
          type="email"
          maxLength={32}
          spellCheck="false"
          required
        />

        <div className="py-1 text-base text-white">
          {state.lang.zh && <div>您的邮箱地址不会被公开</div>}
          {state.lang.en && (
            <div>Your email address will be kept private. </div>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-center py-4">
        <hr className="border-t border-white" />
      </div>

      <div className="flex flex-col">
        <button
          className={classes(
            "rounded-sm border-2 py-3 font-sans font-bold text-white",
            `border-${state.theme.name}-200 hover:bg-${state.theme.name}-500`
          )}
          type="submit"
        >
          {state.lang.zh && <div>注册</div>}
          {state.lang.en && <div>Register</div>}
        </button>
      </div>

      <div className="flex justify-end">
        <div className="text-xl">
          {state.lang.zh && (
            <div>
              已注册？
              <Link href="/login" class="underline">
                登录
              </Link>
            </div>
          )}
          {state.lang.en && (
            <div>
              Already Registered?{" "}
              <Link href="/login" class="underline">
                Login
              </Link>
              .
            </div>
          )}
        </div>
      </div>
    </form>
  )
})
