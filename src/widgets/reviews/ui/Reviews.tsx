import { EmblaCarouselType } from 'embla-carousel'
import { useCallback, useEffect, useState } from "react";
import { reviews } from '@/shared/config/consts';
import { cn } from "@/shared/lib";
import { type CarouselApi, Card, CardContent, CardHeader, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/ui";

export function Reviews() {

  const [api, setApi] = useState<CarouselApi>()
  const [activeSlide, setActiveSlide] = useState<number>(0);


  const updateSlidesInView = useCallback((api: EmblaCarouselType) => {
    console.log(2)
    setActiveSlide(() => {
      if (api.slidesInView().length === api.slideNodes().length) {
        api.off('slidesInView', updateSlidesInView)
      }
      return api.slidesInView()[0]
    })
  }, [])

  useEffect(() => {
    if (!api) return

    updateSlidesInView(api)
    api.on('slidesInView', updateSlidesInView)
    api.on('reInit', updateSlidesInView)


    return () => {
      api.off('reInit', updateSlidesInView)
    }
  }, [api, updateSlidesInView])

  return (
    <>
      <section id='reviews' className="flex flex-col relative pt-8">
        <h2 className="text-center z-20">Отзывы</h2>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            inViewThreshold: .5,
            watchDrag: false
          }}
          onAnimationEnd={() => { console.log(1) }}
          className="w-full self-center z-20"

        >
          <CarouselContent className="flex py-8">
            {reviews.map(({ id, name, city, avatar, review }, index) => (
              <CarouselItem key={id} className="lg:basis-1/2 xl:basis-1/3">
                <Card className={cn("bg-background p-5 h-full border-none transition-shadow ease-out duration-200",
                  index >= activeSlide && index <= activeSlide + 2 && "shadow-lg"
                )}
                >
                  <CardHeader className="flex flex-row p-0 gap-4">
                    {
                      avatar ? <img className="flex size-11 bg-primary rounded-full" src={avatar} /> : <span className="flex size-11 bg-primary rounded-full" />
                    }
                    <div className='w-[calc(100%-3.75rem)]'>
                      <h6 className='font-semibold'>{name}</h6>
                      <p className='font-normal text-[12px]/[16px]'>{city}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center px-0 py-5">
                    <p className="text-[14px]/[24px] font-normal text-foreground">{review}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {
          reviews.length > 3 && <div className="flex justify-center gap-4 z-20 pb-8">
            {Array.from({ length: reviews.length - 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`size-2 rounded-full ${index === activeSlide ? 'bg-primary' : 'bg-gray-400'
                  }`}
              />
            ))}
          </div>
        }
        <span className="absolute z-10 inset-0 -mx-[calc(100vw-100%)] bg-inputBg" />
      </section>

    </>
  )
}