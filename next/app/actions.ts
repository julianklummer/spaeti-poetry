"use server";

import { getStore } from "@netlify/blobs";
import { revalidatePath } from "next/cache";

const store = getStore({
  name: "constributions",
  siteID: process.env.NETLIFY_SITE_ID,
  token: process.env.NETLIFY_ACCESS_TOKEN,
});

export const getContributionList = async (): Promise<any[]> => {
  const contributionList: any[] = [];

  for await (const entry of store.list({ paginate: true })) {
    entry.blobs.forEach((blob) => contributionList.push(blob));
  }

  return contributionList;
};

export const submitContribution = async (text: string) => {
  const timeStamp = new Date().getTime();

  if (text) {
    await store.set(String(timeStamp), text);
  }
};

export const handleSubmission = async (formData: FormData) => {
  const text = formData.get("text") as string;
  if (text.length) submitContribution(text);
  revalidatePath("/");
};
