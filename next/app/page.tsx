import { ContributionList } from "@/components/ContributionList";
import { SubmitButton } from "@/components/SubmitButton";
import { Suspense } from "react";
import { handleSubmission } from "./actions";
import styles from "./page.module.scss";

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

const getContributionMock = async () => {
  return [
    {
      key: "1",
      value: "Lorem ipsum dolor sit amet,",
    },
    {
      key: "2",
      value: "Lorem ipsum",
    },

    {
      key: "3",
      value:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore ",
    },
    {
      key: "4",
      value: "ცეკვის გაკვეთილები (რიტმი ",
    },

    {
      key: "5",
      value: "poeziiiiii",
    },

    {
      key: "6",
      value:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    },

    {
      key: "7",
      value: "Stet clita kasd gubergren, no sea takimata sanctus est ",
    },

    {
      key: "8",
      value: "nonumy eirmod tempor invidunt ut labore",
    },

    {
      key: "9",
      value:
        "sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
    },

    {
      key: "10",
      value: "στο ταξίδι της επιστροφής το ζευγάρι που καθόταν δίπλα μου",
    },
    {
      key: "1",
      value: "Lorem ipsum dolor sit amet,",
    },
    {
      key: "2",
      value: "Lorem ipsum",
    },

    {
      key: "3",
      value:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore ",
    },
    {
      key: "4",
      value: "ცეკვის გაკვეთილები (რიტმი ",
    },

    {
      key: "5",
      value: "poeziiiiii",
    },

    {
      key: "6",
      value:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    },

    {
      key: "7",
      value: "Stet clita kasd gubergren, no sea takimata sanctus est ",
    },

    {
      key: "8",
      value: "nonumy eirmod tempor invidunt ut labore",
    },

    {
      key: "9",
      value:
        "sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
    },

    {
      key: "10",
      value: "στο ταξίδι της επιστροφής το ζευγάρι που καθόταν δίπλα μου",
    },
  ];
};

export default async function Home() {
  // const contributionPromise: Promise<{ key: string; value: string }[]> =
  //   getData();

  const contributionPromise = getContributionMock();

  return (
    <main className={styles.main}>
      <Suspense fallback={<p>Downloading contributions...</p>}>
        <ContributionList dataPromise={contributionPromise} />
      </Suspense>

      <form action={handleSubmission}>
        <span className={styles.codeOfConduct}>
          <span className={styles.codeOfConductHeadline}>
            code of conduct *: <br />
            Welcome to Open Späti!
          </span>
          We invite you to share your verses with us and let us write a poem
          together! *All Languages welcome! *Respect and kindness are key. This
          is a space for creativity and inclusivity. *No room for hate.
          Homophobic, sexist, racist, or otherwise harmful comments will vanish.
        </span>
        <span className={styles.submitGoup}>
          <input type="text" name="text" />
          <SubmitButton />
        </span>
      </form>
    </main>
  );
}
