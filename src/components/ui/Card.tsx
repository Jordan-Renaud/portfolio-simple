import { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-96 flex flex-col justify-center align-center rounded-md border border-black p-11">
      {children}
    </div>
  );
};
