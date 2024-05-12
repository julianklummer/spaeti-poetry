import { getStore } from "@netlify/blobs";

async function getData(): Promise<any[]> {
  const store = getStore("constributions");
  const contributionList: any[] = [];

  for await (const entry of store.list({ paginate: true })) {
    entry.blobs.forEach((blob) => contributionList.push(blob));
  }

  return contributionList;
}

export async function Admin() {
  const data = await getData();

  return <>{JSON.stringify(data)}</>;
}
