import { getStore } from "@netlify/blobs";
import { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const store = getStore("constributions");
  const data = await store.get("1");
  res.status(200).json({ message: JSON.stringify(data) });
}
