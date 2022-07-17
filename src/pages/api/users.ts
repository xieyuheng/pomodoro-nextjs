import { NextApiRequest, NextApiResponse } from "next"
import { createUser } from "../../models/User"

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const id = await createUser()
  res.status(200).send(id)
}
