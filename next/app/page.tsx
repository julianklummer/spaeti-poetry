import { revalidatePath } from "next/cache";
import { getContributionList, submitContribution } from "./actions";
import styles from "./page.module.css";

export default async function Home() {
  const contributionList = await getContributionList();
  const handleSubmission = async (formData: FormData) => {
    "use server";
    const text = formData.get("text") as string;
    if (text.length) submitContribution(text);
    revalidatePath("/");
  };

  return (
    <main className={styles.main}>
      <ul>
        {contributionList.map((contribution, index) => {
          return <li key={index}>{JSON.stringify(contribution)}</li>;
        })}
      </ul>
      <form action={handleSubmission}>
        <input type="text" name="text" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
