// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

type User = {
  name: string
}

export default function (req: NextApiRequest, res: NextApiResponse<User>) {
  res.status(200).json({ name: "Xie Yuheng" })
}
