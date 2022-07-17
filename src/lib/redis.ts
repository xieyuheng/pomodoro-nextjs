import { Client, Entity, Schema } from "redis-om"

const client = new Client()

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL)
  }
}

export class User extends Entity {}
export interface User {
  user: string
}

const UserSchema = new Schema(User, {
  name: { type: "string" },
})

export async function createUser(): Promise<string> {
  await connect()
  const users = client.fetchRepository(UserSchema)
  const user = users.createEntity({ name: "Xie Yuheng" })
  const id = await users.save(user)
  return id
}
