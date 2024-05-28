import myLogo from "../assets/headerlogo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

function Header() {
  const [pageSelected, setPageSelected] = useState(0);
  return (
    <header
      id="header"
      className="w-full bg-black text-sm uppercase flex-1 flex-row"
    >
      <nav className="flex flex-row justify-center gap-12 h-14 items-center">
        <Link
          to="/about-me"
          onClick={() => {
            setPageSelected(1);
          }}
          className={
            "hover:opacity-100 transition ease " +
            (pageSelected != 1 ? "opacity-60" : 0)
          }
        >
          About me
        </Link>
        <Link
          to="/my-cv"
          onClick={() => {
            setPageSelected(2);
          }}
          className={
            "hover:opacity-100 transition ease " +
            (pageSelected != 2 ? "opacity-60" : 0)
          }
        >
          My cv
        </Link>
        <Link to="">
          <motion.img
            onClick={() => {
              setPageSelected(0);
            }}
            whileHover={{ y: 5 }}
            transition={{ ease: "easeOut" }}
            src={myLogo}
            alt="Logo"
            className={
              "headerLogo pt-12 hover:opacity-100 transition " +
              (pageSelected != 0 ? "opacity-80" : 0)
            }
          ></motion.img>
        </Link>
        <Link
          to="/projects"
          onClick={() => {
            setPageSelected(3);
          }}
          className={
            "hover:opacity-100 transition ease " +
            (pageSelected != 3 ? "opacity-60" : 0)
          }
        >
          Projects
        </Link>
        <Link
          to="/contact"
          onClick={() => {
            setPageSelected(4);
          }}
          className={
            "hover:opacity-100 transition ease " +
            (pageSelected != 4 ? "opacity-60" : 0)
          }
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
