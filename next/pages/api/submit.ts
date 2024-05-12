import { getStore } from "@netlify/blobs";

export default async (req: Request, context: Context) => {
  const store = getStore("constributions");
  const data = await store.set("my-file", blob);
};
