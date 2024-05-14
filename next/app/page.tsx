import { getStore } from "@netlify/blobs";
import { handleSubmission } from "./actions";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

const store = getStore({
  name: "constributions",
  siteID: process.env.NETLIFY_SITE_ID,
  token: process.env.NETLIFY_ACCESS_TOKEN,
});

const getData = async () => {
  const contributionList: any[] = [];

  for await (const entry of store.list({ paginate: true })) {
    entry.blobs.forEach((blob) => contributionList.push(blob));
  }
  // const res = await fetch(`${process.env.SITE_BASE_URL}/api/contributions`, {
  //   cache: "no-cache",
  // });
  // const { contributionList } = await res.json();
  return contributionList;
};

export default async function Home() {
  const contributionList: any[] = await getData();

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
