import myLogo from "../assets/headerlogo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      id="header"
      className="w-full bg-black text-sm uppercase flex-1 flex-row"
    >
      <div className="flex flex-row justify-center gap-12 h-14 items-center">
        <Link to="/about-me">About me</Link>
        <Link to="/my-cv">My cv</Link>
        <Link to="">
          <img src={myLogo} alt="Logo" className="headerLogo pt-12"></img>
        </Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  );
}

export default Header;
