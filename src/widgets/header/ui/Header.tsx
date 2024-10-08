import { useEffect, useState } from "react";
import { cn, smoothScroll } from "@/shared/lib/utils";
import { Burger, Logo } from "@/shared/ui";

export function Header() {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (isMenuOpen) { smoothScroll(event) }
    setMenuOpen(prevState => !prevState);

  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 160) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="xs:fixed lg:relative self-center xs:w-[calc(100%-32px)] md:w-[728px] lg:w-full flex xs:flex-col lg:flex-row h-20 lg:justify-between z-30 items-center">
      <div className="xs:flex xs:justify-between h-full lg:h-auto xs:w-full xs:items-center z-30">
        <Logo className={cn(
          isScrolled || isMenuOpen ? "text-black" : "text-background",
          "lg:text-background"
        )} />
        <Burger
          isOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          className={cn(
            isMenuOpen ? "text-black" : "text-white",
            isScrolled && "text-black",
            "lg:hidden -right-4"
          )}
        />
        <span className={cn(
          "absolute lg:hidden inset-0 -mx-[calc(100vw-100%)] transition-all ease-out duration-150",
          isScrolled && !isMenuOpen ? "shadow-lg z-10" : "bg-transparent",
          isScrolled && "bg-white"
        )} />
      </div>
      <nav className="cursor-pointer xs:*:border-b lg:*:border-none lg:h-7 xs:absolute xs:top-20 lg:top-0 lg:static xs:w-full lg:w-auto text-nowrap font-light lg:content-center lg:*:px-3 flex xs:flex-col lg:flex-row text-[16px]/[28px] lg:*:text-background xs:*:text-input-label-active *:decoration-transparent *:cursor-pointer *:underline-offset-4 transition-all *:duration-75 *:ease-out">
        <a
          href='#instructions'
          onClick={toggleMenu}
          className={cn(
            "hover:decoration-background max-lg:hover:text-black max-lg:hover:border-b-black xs:border-t lg:border-none xs:w-full lg:w-auto xs:py-4 lg:py-0 z-30",
            isMenuOpen ? '' : 'xs:hidden lg:block'
          )}
        >
          Как это работает
        </a>
        <a
          href='#reviews'
          onClick={toggleMenu}
          className={cn(
            "lg:hover:decoration-black max-lg:hover:text-black max-lg:hover:border-b-black xs:w-full lg:w-auto xs:py-4 lg:py-0 z-30",
            isMenuOpen ? '' : 'xs:hidden lg:block'
          )}
        >
          3-й блок
        </a>
        <a
          href='#faq'
          onClick={toggleMenu}
          className={cn(
            "hover:decoration-background max-lg:hover:text-black max-lg:hover:border-b-black xs:w-full lg:w-auto xs:py-4 lg:py-0 z-30",
            isMenuOpen ? '' : 'xs:hidden lg:block'
          )}
        >
          Вопросы и ответы
        </a>
        <a
          href='#testForm'
          onClick={toggleMenu}
          className={cn(
            "hover:decoration-background max-lg:hover:text-black max-lg:hover:border-b-black xs:w-full lg:w-auto xs:py-4 lg:py-0 z-30",
            isMenuOpen ? '' : 'xs:hidden lg:block'
          )}
        >
          Форма
        </a>
        <span
          className={cn(
            "pointer-events-none z-20 border-none lg:hidden inset-0 absolute -mx-[calc(100vw-100%)] h-screen -top-20 transition-all ease-out duration-150",
            isMenuOpen ? 'bg-white' : 'bg-transparent'
          )}
        />
      </nav>

    </header>
  )
}