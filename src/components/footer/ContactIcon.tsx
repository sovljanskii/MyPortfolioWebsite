import { motion } from "framer-motion";

interface Props {
  href: string;
  children?: React.ReactNode;
  target?: string;
  label: string;
}

export default function ContactIcon({ href, children, target, label }: Props) {
  return (
    <a href={href} target={target} aria-label={label} className="rounded ">
      <motion.svg
        whileHover={{ scale: 1.2, y: -10 }}
        whileTap={{ scale: 0.95 }}
        className=" bg-black  fill-white rounded-full size-16 p-3 m-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {children}
      </motion.svg>
    </a>
  );
}
