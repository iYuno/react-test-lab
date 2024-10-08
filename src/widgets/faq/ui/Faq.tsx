
import { faq } from "@/shared/config/consts";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui";

export function Faq() {
  return (
    <section className="pt-20 pb-14" id="faq">
      <h2 className="text-center max-md:text-h4">Вопросы и ответы</h2>
      <Accordion type="single" collapsible className="grid grid-cols-12 mt-10 gap-x-8">
        {
          faq.map(({ id, question, answer }) => (
            <AccordionItem value={id.toString()} key={id} className="col-start-2 col-span-10 border-t border-input-border">
              <AccordionTrigger className="hover:text-primary font-semibold text-[18px]/[32px] text-left">{question}</AccordionTrigger>
              <AccordionContent className="pr-8 text-[18px]/[32px] text-input-label text-left">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))
        }
      </Accordion>
    </section>
  )
}