import { Button } from "@/shared/ui";

export function Welcome() {
  return (
    <section className="text-center content-center space-y-20 bottom-0 h-[calc(100vh-5rem)] pb-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-background">Говорят, никогда не поздно <br />сменить профессию</h1>
        <p className="text-[18px]/[32px] text-background font-light">Сделай круто тестовое задание и у тебя получится</p>
      </div>
      <Button className="text-h5 font-semibold" variant='muted'>
        Проще простого!
      </Button>
    </section>
  )
}