import { cookies } from "next/headers";
import { handleDeletion } from "../actions";

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

export default async function Page() {
  const contributionList: any[] = await getData();
  const isAuthorized = cookies().get("authorization")?.value === "true";

  if (isAuthorized) {
    return (
      <main>
        <ul>
          {contributionList.map((contribution, index) => {
            return (
              <li key={index}>
                {contribution.value}
                <button
                  onClick={async () => await handleDeletion(contribution.key)}
                >
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}
