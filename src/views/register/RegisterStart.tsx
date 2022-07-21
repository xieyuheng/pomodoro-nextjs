import classes from "classnames"
import { observer } from "mobx-react-lite"
import { RegisterState as State } from "./RegisterState"
import Link from "../../components/Link"
import FormInput from "../../components/FormInput"
import FormButton from "../../components/FormButton"

export default observer(function RegisterStart({ state }: { state: State }) {
  return (
    <form
      action="/api/register"
      method="post"
      className="flex w-full flex-col space-y-2 text-xl sm:w-auto"
    >
      <div className="font-logo text-3xl font-semibold">
        {state.lang.zh && <div>注册</div>}
        {state.lang.en && <div>Register</div>}
      </div>

      <FormInput
        name="username"
        required
        label={
          <div>
            {state.lang.zh && <div>用户名</div>}
            {state.lang.en && <div>Username</div>}
          </div>
        }
      />

      <FormInput
        name="name"
        required
        label={
          <div>
            {state.lang.zh && <div>名字</div>}
            {state.lang.en && <div>Name</div>}
          </div>
        }
      />

      <FormInput
        name="email"
        type="email"
        required
        label={
          <div>
            {state.lang.zh && <div>电子邮箱</div>}
            {state.lang.en && <div>Email</div>}
          </div>
        }
        footer={
          <div className="py-1 text-base text-white">
            {state.lang.zh && <div>您的邮箱地址不会被公开</div>}
            {state.lang.en && (
              <div>Your email address will be kept private. </div>
            )}
          </div>
        }
      />

      <div className="flex flex-col justify-center py-4">
        <hr className="border-t border-white" />
      </div>

      <FormButton>
        <div>
          {state.lang.zh && <div>注册</div>}
          {state.lang.en && <div>Register</div>}
        </div>
      </FormButton>

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
