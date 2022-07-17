import type { NextApiRequest, NextApiResponse } from "next"
import { createUser, User } from "../../lib/redis"

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const id = await createUser()
  res.status(200).send(id)
}
