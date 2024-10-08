import { EmblaCarouselType } from 'embla-carousel';
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { reviews } from '@/shared/config/consts';
import { cn } from "@/shared/lib";
import { type CarouselApi, Card, CardContent, CardHeader, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/ui";

export function Reviews() {
  const [api, setApi] = useState<CarouselApi>();
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const activeSlideRef = useRef<HTMLDivElement | null>(null);

  const slidesToShow = useMemo(() => {
    if (window.innerWidth < 768) return 0;
    if (window.innerWidth < 1280) return 1;
    return 2;
  }, []);

  const updateSlidesInView = useCallback((api: EmblaCarouselType) => {
    const slidesInView = api.slidesInView();
    if (slidesInView.length === api.slideNodes().length) {
      api.off('slidesInView', updateSlidesInView);
    }
    setActiveSlide(slidesInView[0]);
  }, []);

  const updateContainerHeight = useCallback(() => {
    if (activeSlideRef.current) {
      const newHeight = activeSlideRef.current.offsetHeight;
      if (newHeight !== containerHeight) {
        setContainerHeight(newHeight);
      }
    }
  }, [containerHeight]);

  useEffect(() => {
    const handleResize = () => {
      updateContainerHeight();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [updateContainerHeight]);

  useEffect(() => {
    if (!api) return;
    api.on('slidesInView', updateSlidesInView);
    api.on('reInit', updateSlidesInView);

    return () => {
      api.off('slidesInView', updateSlidesInView);
      api.off('reInit', updateSlidesInView);
    };
  }, [api, updateSlidesInView]);

  useEffect(() => {
    updateContainerHeight();
  }, [activeSlide, updateContainerHeight]);

  const shouldShowPagination = reviews.length > slidesToShow;
  const paginationDots = useMemo(() => {
    return Array.from({ length: reviews.length - slidesToShow });
  }, [reviews.length, slidesToShow]);

  return (
    <section id='reviews' className="flex flex-col relative pt-8">
      <h2 className="text-center z-20 max-md:text-h4">Отзывы</h2>
      <div
        ref={carouselRef}
        className="transition-all duration-300 ease-in-out"
      >
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            inViewThreshold: 0.5,
            watchDrag: window.innerWidth < 1024,
          }}
          style={{ height: containerHeight + 64 }}
          className="w-full self-center z-20 transition-all ease-out"
        >
          <CarouselContent className="flex py-8">
            {reviews.map(({ id, name, city, avatar, review }, index) => (
              <CarouselItem
                key={id}
                className="xs:basis-px-1/1 md:basis-1/2 xl:basis-1/3"
              >
                <Card
                  className={cn(
                    "bg-background p-5 border-none transition-shadow ease-out duration-200 md:h-full max-md:shadow-lg",
                    index >= activeSlide && index <= activeSlide + slidesToShow && "shadow-lg"
                  )}
                  ref={index === activeSlide ? activeSlideRef : null}
                >
                  <CardHeader className="flex flex-row p-0 gap-4">
                    <img
                      className="flex size-11 bg-primary rounded-full"
                      src={avatar || 'default-avatar.png'}
                    />
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
          <CarouselPrevious className='max-lg:hidden' />
          <CarouselNext className='max-lg:hidden' />
        </Carousel>
      </div>
      {shouldShowPagination && (
        <div className="flex justify-center gap-4 z-20 pb-8">
          {paginationDots.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`size-2 rounded-full ${index === activeSlide ? 'bg-primary' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      )}
      <span className="absolute z-10 inset-0 -mx-[calc(100vw-100%)] bg-inputBg" />
    </section>
  );
}
