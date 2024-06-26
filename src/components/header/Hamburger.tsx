import { useState, ReactNode, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import image from "../../assets/headerlogo.png";
interface HamburgerProps {
  children: ReactNode;
}

export default function Hamburger({ children }: HamburgerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [h1Text, setH1Text] = useState("Home");
  const location = useLocation(); // Use the useLocation hook

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const h1 = document.querySelector("h1");
    if (h1) {
      setH1Text(h1.textContent || "");
    }
  }, [location]);

  return (
    <>
      <div className="h-12 flex flex-row justify-between items-center">
        {/* Hamburger Icon */}
        <div onClick={toggleHamburger} className="hamburger-icon">
          <div className={isOpen ? "bar1 open" : "bar1"}></div>
          <div className={isOpen ? "bar2 open" : "bar2"}></div>
          <div className={isOpen ? "bar3 open" : "bar3"}></div>
        </div>
        <p>{h1Text} </p>
        <Link to="/">
          <img className="h-[150%] pt-8" src={image} alt="Logo picture" />
        </Link>
      </div>
      {isOpen && (
        <nav
          className="hamburger-content flex flex-col"
          onClick={toggleHamburger}
        >
          {children}
        </nav>
      )}
    </>
  );
}
