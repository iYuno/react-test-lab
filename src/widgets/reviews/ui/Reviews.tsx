import { CarouselEntity as Carousel } from "@/entities/Carousel";


export function Reviews() {

  return (
    <section id='reviews' className="flex flex-col relative pt-8">
      <h2 className="text-center z-20 max-md:text-h4">Отзывы</h2>
      <Carousel />
      <span className="absolute z-10 inset-0 -mx-[calc(100vw-100%)] bg-inputBg" />
    </section>
  );
}
