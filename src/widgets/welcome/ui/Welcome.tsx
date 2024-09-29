import { Button } from "@/shared/ui";

export function Welcome() {
  return (
    <section className="text-center content-center bottom-0 h-[calc(100vh-5rem)] pb-20">
      <div className="flex flex-col gap-4 lg:mb-20 md:mb-10">
        <h1 className="text-background">Говорят, никогда не поздно <br />сменить профессию</h1>
        <p className="lg:text-[18px]/[32px] md:text-[16px]/[28px] text-background font-light">Сделай круто тестовое задание и у тебя получится</p>
      </div>
      <Button className="text-h5 font-semibold" variant='muted'>
        Проще простого!
      </Button>
    </section>
  )
}