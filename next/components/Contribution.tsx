"use client";

type Props = {
  value: string;
  withDelete: boolean;
  handleDelete?: () => void;
};

export const Contribution: React.FC<Props> = ({
  value,
  withDelete,
  handleDelete,
}) => {
  return (
    <div>
      {value}
      {withDelete ? <button onClick={handleDelete}>delete</button> : null}
    </div>
  );
};
