import { getContributionList } from "../actions";

export default async function Admin() {
  const data = await getContributionList();

  return <>{JSON.stringify(data)}</>;
}
