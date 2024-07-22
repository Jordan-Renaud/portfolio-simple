import { ReactNode } from "react";

export const Card = ({
  children,
  leftCta,
  rightCta,
}: {
  children: ReactNode;
  leftCta: ReactNode;
  rightCta: ReactNode;
}) => {
  return (
    <div
      style={{
        height: "inherit",
        color: "#033500",
        border: "solid 1px #033500",
        borderRadius: "1rem",
        padding: "2rem",
        display: "grid",
        gridTemplateRows: "1fr 42px",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateAreas: '"children children"\n"left right"',
      }}
    >
      <div style={{ gridArea: "children" }}>{children}</div>

      <div style={{ gridArea: "left" }}>{leftCta}</div>
      <div
        style={{
          gridArea: "right",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {rightCta}
      </div>
    </div>
  );
};
