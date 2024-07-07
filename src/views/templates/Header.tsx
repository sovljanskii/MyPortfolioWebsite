import myLogo from "../../assets/headerlogo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Hamburger from "../../components/header/Hamburger";

export default function Header() {
  const location = useLocation().pathname;
  return (
    <header
      id="header"
      className="w-full bg-black text-sm uppercase flex-1 flex-row py-1"
    >
      {/* PC */}
      <nav className="hidden tablet:flex flex-row justify-center gap-12 h-14 items-center">
        <Link
          to="/about-me"
          className={
            "hover:opacity-100 transition ease " +
            (location != "/about-me" ? "opacity-60" : 0)
          }
        >
          About me
        </Link>
        <Link
          to="/skills"
          className={
            "hover:opacity-100 transition ease " +
            (location != "/skills" ? "opacity-60" : 0)
          }
        >
          Skills
        </Link>
        <Link to="" className="z-10">
          <motion.img
            whileHover={{ y: 5 }}
            transition={{ ease: "easeOut" }}
            src={myLogo}
            alt="Logo"
            className={
              "headerLogo pt-12 hover:opacity-100 transition " +
              (location != "/" ? "opacity-85" : 0)
            }
          ></motion.img>
        </Link>
        <Link
          to="/projects"
          className={
            "hover:opacity-100 transition ease " +
            (location != "/projects" ? "opacity-60" : 0)
          }
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className={
            "hover:opacity-100 transition ease " +
            (location != "/contact" ? "opacity-60" : 0)
          }
        >
          Contact
        </Link>
      </nav>
      {/* Mobile */}
      <div className="tablet:hidden p-2">
        <Hamburger>
          <Link
            to="/"
            className={
              "hover:opacity-100 transition ease " +
              (location != "/" ? "opacity-60" : 0)
            }
          >
            Home
          </Link>
          <Link
            to="/about-me"
            className={
              "hover:opacity-100 transition ease " +
              (location != "/about-me" ? "opacity-60" : 0)
            }
          >
            About me
          </Link>
          <Link
            to="/skills"
            className={
              "hover:opacity-100 transition ease " +
              (location != "/skills" ? "opacity-60" : 0)
            }
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className={
              "hover:opacity-100 transition ease " +
              (location != "/projects" ? "opacity-60" : 0)
            }
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={
              "hover:opacity-100 transition ease " +
              (location != "/contact" ? "opacity-60" : 0)
            }
          >
            Contact
          </Link>
        </Hamburger>
      </div>
    </header>
  );
}
