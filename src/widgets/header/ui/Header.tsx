import { Logo } from "@/shared/ui";

export function Header() {

  return (
    <header className="w-full flex h-20 justify-between z-20 items-center">
      <Logo />
      <nav className="h-7 content-center *:px-3 flex *:text-[16px]/[28px] *:text-background *:decoration-transparent *:cursor-pointer *:underline-offset-4 *:transition-all *:duration-75 *:ease-out">
        <a className="hover:decoration-background">Как это работает</a>
        <a className="hover:decoration-background">3-й блок</a>
        <a className="hover:decoration-background">Вопросы и ответы</a>
        <a className="hover:decoration-background">Форма</a>
      </nav>
    </header>
  )
}