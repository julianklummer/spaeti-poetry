import { getStore } from "@netlify/blobs";
import { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const store = getStore("constributions");
  await store.set("1", "text 1");
  res.status(200).json({ message: "Set text 1" });
}
