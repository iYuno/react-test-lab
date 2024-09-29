import { smoothScroll } from "@/shared/lib/utils";
import { Logo } from "@/shared/ui";

export function Header() {

  return (
    <header className="w-full flex h-20 justify-between z-20 items-center">
      <Logo />
      <nav className="h-7 font-light content-center *:px-3 flex text-[16px]/[28px] *:text-background *:decoration-transparent *:cursor-pointer *:underline-offset-4 *:transition-all *:duration-75 *:ease-out">
        <a href='#instructions' onClick={smoothScroll} className="hover:decoration-background">Как это работает</a>
        <a href='#reviews' onClick={smoothScroll} className="hover:decoration-background">3-й блок</a>
        <a href='#faq' onClick={smoothScroll} className="hover:decoration-background">Вопросы и ответы</a>
        <a href='#testForm' onClick={smoothScroll} className="hover:decoration-background">Форма</a>
      </nav>
    </header>
  )
}