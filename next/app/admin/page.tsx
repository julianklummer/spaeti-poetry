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
  const contributionList: any[] = await getData();
  const isAuthorized = cookies().get("authorization")?.value === "true";

  if (isAuthorized) {
    return (
      <main>
        <ul>
          {contributionList.map(({ key, value }, index) => {
            return (
              <li key={index + key}>
                <Contribution key={key} value={value} withDelete={true} />
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}
