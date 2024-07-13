import { useState, ReactNode } from "react";
import { Link } from "react-router-dom"; // Import useLocation
import image from "../../assets/headerlogo.png";
interface HamburgerProps {
  children: ReactNode;
}

export default function Hamburger({ children }: HamburgerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="h-12 flex flex-row justify-between items-center">
        {/* Hamburger Icon */}
        <div onClick={toggleHamburger} className="hamburger-icon">
          <div className={isOpen ? "bar1 open" : "bar1"}></div>
          <div className={isOpen ? "bar2 open" : "bar2"}></div>
          <div className={isOpen ? "bar3 open" : "bar3"}></div>
        </div>
        <Link to="/">
          <img className="pt-2 h-[80px]" src={image} alt="Logo picture" />
        </Link>
      </div>
      {isOpen && (
        <nav
          className="hamburger-content bg-black flex flex-col"
          onClick={toggleHamburger}
        >
          {children}
        </nav>
      )}
    </>
  );
}
