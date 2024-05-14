"use server";

import { revalidatePath } from "next/cache";

export const getContributionList = async (): Promise<any[]> => {
  const res = await fetch(`${process.env.SITE_BASE_URL}/api/contributions`, {
    cache: "no-cache",
  });
  const { contributionList } = await res.json();
  return contributionList;
};

export const handleSubmission = async (formData: FormData) => {
  const text = formData.get("text") as string;
  if (text.length) {
    await fetch(`${process.env.SITE_BASE_URL}/api/contributions`, {
      method: "POST",
      body: JSON.stringify({ text }),
    });
  }
  revalidatePath("/");
};
