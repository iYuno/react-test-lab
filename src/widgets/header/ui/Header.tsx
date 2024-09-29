import { useState } from "react";
import { cn, smoothScroll } from "@/shared/lib/utils";
import { Logo } from "@/shared/ui";

export function Header() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (isMenuOpen) { smoothScroll(event) }
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative w-full flex md:flex-col lg:flex-row lg:h-20 lg:justify-between z-30 items-center">
      <div className="md:flex md:justify-between md:h-20 lg:h-auto md:w-full md:items-center">
        <Logo />
        <span className="size-10 bg-black md:block lg:hidden" onClick={toggleMenu} />
      </div>
      <nav className="cursor-pointer md:*:border-t lg:*:border-none lg:h-7 md:absolute md:top-20 lg:top-0 lg:static md:w-full lg:w-auto text-nowrap font-light lg:content-center lg:*:px-3 flex sm:flex-col lg:flex-row text-[16px]/[28px] lg:*:text-background md:*:text-input-label-active *:decoration-transparent *:cursor-pointer *:underline-offset-4 transition-all *:duration-75 *:ease-out">
        <a
          href='#instructions'
          onClick={toggleMenu}
          className={cn(
            "hover:decoration-background md:w-full lg:w-auto md:py-4 lg:py-auto z-30",
            isMenuOpen ? '' : 'md:hidden lg:block'
          )}
        >
          Как это работает
        </a>
        <a
          href='#reviews'
          onClick={toggleMenu}
          className={cn(
            "hover:decoration-background md:w-full lg:w-auto md:py-4 lg:py-auto z-30",
            isMenuOpen ? '' : 'md:hidden lg:block'
          )}
        >
          3-й блок
        </a>
        <a
          href='#faq'
          onClick={toggleMenu}
          className={cn(
            "hover:decoration-background md:w-full lg:w-auto md:py-4 lg:py-auto z-30",
            isMenuOpen ? '' : 'md:hidden lg:block'
          )}
        >
          Вопросы и ответы
        </a>
        <a
          href='#testForm'
          onClick={toggleMenu}
          className={cn(
            "hover:decoration-background md:w-full md:border-b lg:border-none lg:w-auto md:py-4 lg:py-auto z-30",
            isMenuOpen ? '' : 'md:hidden lg:block'
          )}
        >
          Форма
        </a>
        <span
          className={cn(
            "pointer-events-none z-20 lg:hidden inset-0 absolute -mx-[calc(100vw-100%)] h-screen -top-20",
            isMenuOpen ? 'bg-white' : 'hidden'
          )}
        />
      </nav>

    </header>
  )
}