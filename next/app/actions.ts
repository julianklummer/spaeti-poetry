"use server";

import { getStore } from "@netlify/blobs";

export const getContributionList = async (): Promise<any[]> => {
  const store = getStore("constributions");
  const contributionList: any[] = [];

  for await (const entry of store.list({ paginate: true })) {
    entry.blobs.forEach((blob) => contributionList.push(blob));
  }

  return contributionList;
};

export const submitContribution = async (text: string) => {
  const store = getStore("constributions");
  const timeStamp = new Date().getTime();

  if (text) {
    await store.set(String(timeStamp), text);
  }
};
