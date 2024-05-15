"use client";

import { handleDeletion } from "@/app/actions";

type Props = {
  key?: string;
  value: string;
  withDelete: boolean;
  handleDelete?: () => void;
};

export const Contribution: React.FC<Props> = ({ key, value, withDelete }) => {
  return (
    <div>
      {value}
      {withDelete && key ? (
        <button onClick={async () => handleDeletion(key)}>delete</button>
      ) : null}
    </div>
  );
};
