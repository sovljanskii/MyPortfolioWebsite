import { motion, MotionProps } from "framer-motion";
import React from "react";
interface LinkedButtonProps extends MotionProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const LinkedButton: React.FC<LinkedButtonProps> = ({ children, ...props }) => {
  const castedChildren = children as React.ReactNode;
  return (
    <motion.button
      className="button relative bg-blackopacity py-2 pr-10 px-4 rounded-full text-p inline border border-whiteopacity hover:bg-black  transition ease-in-out"
      transition={{
        ease: "backInOut",
        repeat: Infinity,
        duration: 1,
        repeatDelay: 3,
      }}
      {...props}
    >
      {castedChildren}
      <div className="absolute top-1/2 right-[17px] -translate-x-1/2	-translate-y-1/2 rotate-90	arrow">
        <span></span>
        <span></span>
      </div>
    </motion.button>
  );
};

export default LinkedButton;
