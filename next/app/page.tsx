import { getContributionList, handleSubmission } from "./actions";
import styles from "./page.module.css";

export default async function Home() {
  const contributionList = await getContributionList();

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
