import { getStore } from "@netlify/blobs";
import { NextApiRequest, NextApiResponse } from "next";

const store = getStore({
  name: "constributions",
  siteID: process.env.NETLIFY_SITE_ID,
  token: process.env.NETLIFY_ACCESS_TOKEN,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    if (req.body.text?.length) {
      await store.set(String(new Date().getTime()), req.body.text);
      res.status(200);
      res.json({ Success: true });
    } else {
      res.status(400);
      res.json({ Success: false });
    }
  } else if (req.method === "GET") {
    const contributionList: any[] = [];

    for await (const entry of store.list({ paginate: true })) {
      entry.blobs.forEach((blob) => contributionList.push(blob));
    }

    res.status(200).json({ contributionList });
  }
}
