import { useState } from "react";
import { cn } from "../../lib";

interface IBurger {
  toggleMenu: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  className?: string
}

export function Burger({ toggleMenu, className }: IBurger) {
  const [isOpen, setIsOpen] = useState(false);

  const burgerHangle = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    toggleMenu(event);
    setIsOpen(!isOpen);
  };


  return (
    <button
      className={cn(
        "relative z-50 flex items-center justify-center p-5 text-gray-900 focus:outline-none",
        className
      )}
      onClick={burgerHangle}
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <span className="block w-6 h-3 relative">
        <span
          className={`absolute block w-full h-[2px] bg-current transition-all duration-300 ${isOpen ? "rotate-45 top-1/2 transform -translate-y-1/2" : "top-0 transform translate-y-0"
            }`}
        ></span>
        <span
          className={`absolute block w-full h-[2px] bg-current transition-all duration-300 ${isOpen ? "-rotate-45 top-1/2 transform -translate-y-1/2" : "top-full transform -translate-y-0"
            }`}
        ></span>
      </span>
    </button>
  );
}