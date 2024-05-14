import { getStore } from "@netlify/blobs";
import { NextApiRequest, NextApiResponse } from "next";

const store = getStore({
  name: "constributions",
  siteID: process.env.NETLIFY_SITE_ID,
  token: process.env.NETLIFY_ACCESS_TOKEN,
});

export async function GET() {
  const contributionList: any[] = [];

  for await (const entry of store.list({ paginate: true })) {
    entry.blobs.forEach((blob) => contributionList.push(blob));
  }

  return Response.json({ contributionList });
}

export async function POST(req: Request) {
  const { text } = await req.json();
  if (text.length) {
    await store.set(String(new Date().getTime()), text);
  }

  return Response.json({ Success: true });
}
