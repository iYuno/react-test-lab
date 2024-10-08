import { Button } from "@/shared/ui";

export function Welcome() {
  return (
    <section className="z-20 text-center content-center bottom-0 h-[calc(100vh)] lg:pb-20">
      <div className="flex flex-col gap-4 lg:mb-20 xs:mb-6 md:mb-10 max-md:w-2/3 mx-auto">
        <h1 className="text-background max-lg:text-h3 max-md:text-h4">Говорят, никогда не поздно <br className="max-md:hidden"/>сменить профессию</h1>
        <p className="lg:text-[18px]/[32px] xs:text-[16px]/[28px] text-background font-light">Сделай круто тестовое задание и у тебя получится</p>
      </div>
      <Button className="text-h5 font-semibold" variant='muted'>
        Проще простого!
      </Button>
    </section>
  )
}