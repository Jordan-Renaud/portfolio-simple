import { ReactNode } from "react";

export const Button = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => (
  <button
    className="text-green-800 rounded-md border-green-800 border hover:bg-green-800 hover:text-white p-2"
    onClick={onClick}
  >
    {children}
  </button>
);
