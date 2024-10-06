import { useEffect, useState } from "react";
import { cn, smoothScroll } from "@/shared/lib/utils";
import { Burger, Logo } from "@/shared/ui";

export function Header() {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (isMenuOpen) { smoothScroll(event) }
    setMenuOpen(!isMenuOpen);
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
    <header className="md:fixed lg:relative md:w-[728px] lg:w-full flex md:flex-col lg:flex-row lg:h-20 lg:justify-between z-30 items-center">
      <div className="md:flex md:justify-between md:h-20 lg:h-auto md:w-full md:items-center z-30">
        <Logo className={isScrolled || isMenuOpen ? "text-black" : "text-background"} />
        <Burger
          toggleMenu={toggleMenu}
          className={cn(
            isMenuOpen ? "text-black" : "text-white",
            isScrolled && "text-black",
            "lg:hidden"
          )}
        />
        <span className={cn(
          "absolute lg:hidden inset-0 -mx-[calc(100vw-100%)] transition-all ease-out duration-150",
          isScrolled && !isMenuOpen ? "shadow-lg z-10" : "bg-transparent",
          isScrolled && "bg-white"
        )} />
      </div>
      <nav className="cursor-pointer md:*:border-t lg:*:border-none lg:h-7 md:absolute md:top-20 lg:top-0 lg:static md:w-full lg:w-auto text-nowrap font-light lg:content-center lg:*:px-3 flex sm:flex-col lg:flex-row text-[16px]/[28px] lg:*:text-background md:*:text-input-label-active *:decoration-transparent *:cursor-pointer *:underline-offset-4 transition-all *:duration-75 *:ease-out">
        <a
          href='#instructions'
          onClick={toggleMenu}
          className={cn(
            "hover:decoration-background md:w-full lg:w-auto md:py-4 lg:py-0 z-30",
            isMenuOpen ? '' : 'md:hidden lg:block'
          )}
        >
          Как это работает
        </a>
        <a
          href='#reviews'
          onClick={toggleMenu}
          className={cn(
            "hover:decoration-background md:w-full lg:w-auto md:py-4 lg:py-0 z-30",
            isMenuOpen ? '' : 'md:hidden lg:block'
          )}
        >
          3-й блок
        </a>
        <a
          href='#faq'
          onClick={toggleMenu}
          className={cn(
            "hover:decoration-background md:w-full lg:w-auto md:py-4 lg:py-0 z-30",
            isMenuOpen ? '' : 'md:hidden lg:block'
          )}
        >
          Вопросы и ответы
        </a>
        <a
          href='#testForm'
          onClick={toggleMenu}
          className={cn(
            "hover:decoration-background md:w-full md:border-b lg:border-none lg:w-auto md:py-4 lg:py-0 z-30",
            isMenuOpen ? '' : 'md:hidden lg:block'
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