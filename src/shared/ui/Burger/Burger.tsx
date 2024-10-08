
import { cn } from "../../lib";

interface IBurger {
  toggleMenu: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  className?: string,
  isOpen: boolean
}

export function Burger({ toggleMenu, className, isOpen }: IBurger) {


  const burgerHangle = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    toggleMenu(event);
  };

  return (
    <button
      className={cn(
        "relative z-50 flex items-center justify-center size-16 text-gray-900 focus:outline-none",
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