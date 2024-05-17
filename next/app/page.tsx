import { ContributionList } from "@/components/ContributionList";
import { SubmitButton } from "@/components/SubmitButton";
import { Suspense } from "react";
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
  const contributionPromise: Promise<{ key: string; value: string }[]> =
    getData();

  return (
    <main className={styles.main}>
      <Suspense fallback={<p>Downloading contributions...</p>}>
        <ContributionList dataPromise={contributionPromise} />
      </Suspense>

      <form action={handleSubmission}>
        <input type="text" name="text" />
        <SubmitButton />
      </form>
    </main>
  );
}
