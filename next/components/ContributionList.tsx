"use client";
import { use } from "react";
import { Contribution } from "./Contribution";

type Props = {
  dataPromise: Promise<{ key: string; value: string }[]>;
};

export const ContributionList: React.FC<Props> = ({ dataPromise }) => {
  const data = use(dataPromise);

  return (
    <ul>
      {data.map((contribution, index) => {
        return (
          <li key={index}>
            <li key={index + contribution.key}>
              <Contribution data={contribution} withDelete={false} />
            </li>
          </li>
        );
      })}
    </ul>
  );
};
