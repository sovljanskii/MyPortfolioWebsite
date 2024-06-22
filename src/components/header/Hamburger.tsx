import { useState, ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation

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
      <div
        className="hamburger-icon flex flex-row justify-between"
        onClick={toggleHamburger}
      >
        {/* Hamburger Icon */}
        <div>
          <div className={isOpen ? "bar1 open" : "bar1"}></div>
          <div className={isOpen ? "bar2 open" : "bar2"}></div>
          <div className={isOpen ? "bar3 open" : "bar3"}></div>
        </div>
        <div>{h1Text}</div>
      </div>
      {isOpen && (
        <div
          className="hamburger-content flex flex-col"
          onClick={toggleHamburger}
        >
          {children}
        </div>
      )}
    </>
  );
}
