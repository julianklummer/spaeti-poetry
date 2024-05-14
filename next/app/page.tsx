import { submitContribution } from "./actions";
import styles from "./page.module.css";

export default function Home() {
  const handleSubmission = async (formData: FormData) => {
    const text = formData.get("text") as string;
    if (text.length) submitContribution(text);
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
