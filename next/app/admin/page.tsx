import { Contribution } from "@/components/Contribution";
import { cookies } from "next/headers";

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
  const contributionList: { key: string; value: string }[] = await getData();
  const isAuthorized = cookies().get("authorization")?.value === "true";

  if (isAuthorized) {
    return (
      <main>
        <ul>
          {contributionList.map((contribution, index) => {
            return (
              <li key={index + contribution.key}>
                <Contribution data={contribution} withDelete={true} />
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}
