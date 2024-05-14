"use server";

import { revalidatePath } from "next/cache";

export const handleSubmission = async (formData: FormData) => {
  const text = String(formData.get("text"));
  if (text.length) {
    await fetch(`${process.env.SITE_BASE_URL}/api/contributions`, {
      method: "POST",
      body: JSON.stringify({ text }),
    });
  }
  revalidatePath("/");
};
