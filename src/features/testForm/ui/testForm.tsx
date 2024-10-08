import { Input, Button, Checkbox } from "@/shared/ui"


export function TestForm() {
  return (
    <div className="py-20 space-y-11" id="testForm">
      <h2 className="text-center max-md:text-h4">Отправь форму</h2>
      <form className="grid grid-cols-12 xs:gap-5 md:gap-6 lg:gap-8">
        <Input className="xs:cols-start-1 xs:col-span-full md:col-start-1 md:col-span-6 lg:col-start-3 lg:col-span-4" placeholder="Имя" />
        <Input className="xs:cols-start-1 xs:col-span-full md:col-start-7 md:col-span-6 lg:col-start-7 lg:col-span-4" placeholder="Телефон" />
        <div className="xs:cols-start-1 xs:col-span-full md:col-start-1 md:col-span-6 lg:col-start-3 lg:col-span-4 flex gap-4">
          <Checkbox className="my-0.5" />
          <p className="text-[16px]/[28px] self-start">Согласен, отказываюсь</p>
        </div>
        <Button type="submit" className="xs:cols-start-1 xs:col-span-full md:col-start-7 md:col-span-6 lg:col-start-7 lg:col-span-4 !text-h5 text-primary-foreground">Отправить</Button>
      </form>
    </div>

  )
}