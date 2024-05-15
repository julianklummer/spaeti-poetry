import { Contribution } from "@/components/Contribution";
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
  const contributionList: { key: string; value: string }[] = await getData();

  return (
    <main className={styles.main}>
      <ul>
        {contributionList.map((contribution, index) => {
          return (
            <li key={index}>
              <li key={index + contribution.key}>
                <Contribution data={contribution} withDelete={false} />
              </li>
            </li>
          );
        })}
      </ul>
      <form action={handleSubmission}>
        <input type="text" name="text" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
