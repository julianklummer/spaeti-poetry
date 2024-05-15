"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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

export const handleDeletion = async (key: string) => {
  if (key.length) {
    await fetch(`${process.env.SITE_BASE_URL}/api/contributions`, {
      method: "DELETE",
      body: JSON.stringify({ key }),
    });
  }
  revalidatePath("/");
};

export const handleLogin = (formData: FormData) => {
  const inputPassword = String(formData.get("password"));

  if (inputPassword === process.env.MASTER_PASSWORD) {
    console.log("setting cookie");
    cookies().set("authorization", "true", {
      secure: true,
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 60,
    });
    redirect(`/admin`);
  }
};
