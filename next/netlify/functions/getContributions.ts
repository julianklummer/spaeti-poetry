import { getStore } from "@netlify/blobs";
import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const store = getStore({
  name: "constributions",
  siteID: process.env.NETLIFY_SITE_ID,
  token: process.env.NETLIFY_ACCESS_TOKEN,
});

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const contributionList: any[] = [];

  for await (const entry of store.list({ paginate: true })) {
    entry.blobs.forEach((blob) => {
      contributionList.push(store.get(blob.key));
    });
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ contributionList }),
  };
};
