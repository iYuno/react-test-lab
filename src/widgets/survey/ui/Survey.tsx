import { survey } from "@/shared/config/consts";

export function Survey() {

  return (
    <section className="flex flex-col relative py-16">
      <ul className="grid xs:grid-cols-1 lg:grid-cols-2 gap-8 z-20">
        {
          survey.map(({ title, description }, index) => (
            <li className="flex flex-col gap-4" key={index}>
              <p className="text-[18px]/[32px] font-semibold">{title}</p>
              <p className="text-[16px]/[28px]">{description}</p>
            </li>
          ))
        }
      </ul>
      <span className="absolute z-10 inset-0 -mx-[calc(100vw-100%)] bg-inputBg" />
    </section>
  )
}