import React from "react";

const H2: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <h2 className={`text-p2s tablet:text-p2 ${className}`}>{children}</h2>;
};

export default H2;
