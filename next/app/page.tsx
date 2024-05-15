import { handleSubmission } from "./actions";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

const getData = async () => {
  const res = await fetch(
    `${process.env.SITE_BASE_URL}/.netlify/functions/getContributions`,
    {
      cache: "no-cache",
    }
  );
  const { contributionList } = await res.json();
  return contributionList;
};

export default async function Home() {
  const contributionList: any[] = await getData();

  return (
    <main className={styles.main}>
      <ul>
        {contributionList.map((contribution, index) => {
          return <li key={index}>{contribution.value}</li>;
        })}
      </ul>
      <form action={handleSubmission}>
        <input type="text" name="text" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
