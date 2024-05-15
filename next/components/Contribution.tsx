"use client";

import { handleDeletion } from "@/app/actions";

type Props = {
  key?: string;
  value: string;
  withDelete: boolean;
};

export const Contribution: React.FC<Props> = ({ key, value, withDelete }) => {
  const renderDeleteButton = () => (
    <button onClick={async () => handleDeletion(key)}>delete</button>
  );

  return (
    <div>
      {value}
      {withDelete && key ? renderDeleteButton() : null}
    </div>
  );
};
