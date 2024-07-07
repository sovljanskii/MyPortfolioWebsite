import React from "react";

const H1: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <h1 className={`text-h1s tablet:text-h1 ${className}`}>{children}</h1>;
};

export default H1;
