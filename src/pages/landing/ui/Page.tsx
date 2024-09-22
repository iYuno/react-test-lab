import { Button } from "@/shared/ui";

export function LandingPage() {

  return (
    <>
      <main className="z-20">
        <section className="text-center content-center space-y-20 mt-[calc(50vh-240px)]">
          <div className="flex flex-col gap-4">
            <h1 className="text-background">Говорят, никогда не поздно <br />сменить профессию</h1>
            <p className="text-[18px]/[32px] text-background">Сделай круто тестовое задание и у тебя получится</p>
          </div>
          <Button className="text-h5 font-bold" variant='muted'>
            Проще простого!
          </Button>
        </section>
      </main>
      <div className="absolute left-0 right-0 h-screen z-10 bg-primary/80" />
      <img className="absolute left-0 w-screen h-screen object-cover z-0" src="public\bg_main.png" />
    </>
  )
}