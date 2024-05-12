import { getStore } from "@netlify/blobs";

("use server");
async function getData(): Promise<any[]> {
  const store = getStore("constributions");
  const contributionList: any[] = [];

  for await (const entry of store.list({ paginate: true })) {
    entry.blobs.forEach((blob) => contributionList.push(blob));
  }

  return contributionList;
}

export default async function Admin() {
  const data = await getData();

  return <>{JSON.stringify(data)}</>;
}
