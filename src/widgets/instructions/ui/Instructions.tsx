import { blocks } from "@/shared/config/consts";

export function Instructions() {

  return (
    <section className="flex flex-col py-20" id="instructions">
      <h2 className="text-center">Как это работает</h2>
      <ul className="grid grid-cols-4 gap-8 mt-16">
        {
          blocks.map(({ img, title, desc }, index) => (
            <li className="flex flex-col" key={index}>
              <img src={img} className="size-20 mb-4" />
              <h6>{title}</h6>
              <p className="text-[14px]/[24px] text-input-label mt-1">{desc}</p>
            </li>
          ))
        }
      </ul>
      <div className="mt-20 grid grid-cols-2 gap-8">
        <div className="content-center">
          <h3>Круто, ты дошел до третьего блока</h3>
          <p className="text-input-label text-[16px]/[28px] mt-4">63% опрошенных пользовались кредитами из-за того,
            что не могли покрыть непредвиденные расходы свыше 15 000 ₽.
            <br />
            <br />
            Доступ к заработанным деньгам помогает отказаться от кредитов
            и экономить деньги на процентах и штрафах.
          </p>
        </div>
        <img src="public/demo.png" />
      </div>
    </section>
  )

}