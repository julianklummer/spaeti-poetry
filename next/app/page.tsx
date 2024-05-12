"use server";
import { getStore } from "@netlify/blobs";
import styles from "./page.module.css";

export default function Home() {
  const handleSubmission = async (formData: FormData) => {
    const text = formData.get("text");
    const store = getStore("constributions");
    const timeStamp = new Date().getTime();

    if (text) {
      await store.set(String(timeStamp), text);
    }
  };

  return (
    <main className={styles.main}>
      <form action={handleSubmission}>
        <input type="text" name="text" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
