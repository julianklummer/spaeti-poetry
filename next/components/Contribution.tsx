"use client";

import { handleDeletion } from "@/app/actions";

type Props = {
  data: {
    key: string;
    value: string;
  };
  withDelete: boolean;
};

export const Contribution: React.FC<Props> = ({ data, withDelete }) => {
  return (
    <div>
      {data.value}
      {withDelete ? (
        <button onClick={async () => handleDeletion(data.key)}>delete</button>
      ) : null}
    </div>
  );
};
