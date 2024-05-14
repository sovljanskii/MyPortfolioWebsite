import { motion } from "framer-motion";

interface Props {
  href?: string;
  children?: React.ReactNode;
}

function ContactIcon({ href, children }: Props) {
  return (
    <a href={href}>
      <motion.svg
        whileHover={{ scale: 1.2, y: -10 }}
        whileTap={{ scale: 0.9 }}
        className="icon-list p-3 m-2 rounded-full"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
      >
        {children}
      </motion.svg>
    </a>
  );
}

export default ContactIcon;
