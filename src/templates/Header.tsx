import myLogo from "../assets/headerlogo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  return (
    <header
      id="header"
      className="w-full bg-black text-sm uppercase flex-1 flex-row"
    >
      <div className="flex flex-row justify-center gap-12 h-14 items-center">
        <Link to="/about-me" className="hover:underline">
          About me
        </Link>
        <Link to="/my-cv" className="hover:underline">
          My cv
        </Link>
        <Link to="">
          <motion.img
            whileHover={{ y: 5 }}
            transition={{ ease: "easeOut" }}
            src={myLogo}
            alt="Logo"
            className="headerLogo pt-12"
          ></motion.img>
        </Link>
        <Link to="/projects" className="hover:underline">
          Projects
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </header>
  );
}

export default Header;
