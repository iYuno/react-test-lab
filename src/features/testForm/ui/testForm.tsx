import { Input, Button, Checkbox } from "@/shared/ui"


export function TestForm() {
  return (
    <div className="py-20 space-y-11" id="testForm">
      <h2 className="text-center">Отправь форму</h2>
      <form className="grid grid-cols-12 gap-8">
        <Input className="col-start-3 col-span-4" placeholder="Имя" />
        <Input className="col-start-7 col-span-4" placeholder="Телефон" />
        <div className="col-start-3 col-span-4 flex gap-4">
          <Checkbox className="my-0.5" />
          <p className="text-[16px]/[28px] self-start">Согласен, отказываюсь</p>
        </div>
        <Button type="submit" className="col-start-7 col-span-4 !text-h5 text-primary-foreground">Отправить</Button>
      </form>
    </div>

  )
}