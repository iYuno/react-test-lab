import React from "react";
import { reviews } from "@/shared/config/consts";
import { cn } from "@/shared/lib";
import { CarouselContent, CarouselItem, Card, CardHeader, CardContent, CarouselPrevious, CarouselNext, Carousel, CarouselApi } from "@/shared/ui";
import { useReviewsCarousel } from "../model/hooks";

export function ReviewsCarousel() {

  const {
    api,
    setApi,
    activeSlide,
    activeSlideRef,
    containerHeight,
    slidesToShow,
    shouldShowPagination,
    paginationDots,
    carouselRef
  } = useReviewsCarousel();

  return (
    <>
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
                  {/* 
                    WIP
                    <CardInner avatar={avatar} name={name} city={city} review={review} /> 
                  */}
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
    </>
  )
}


/*
One of the solutions for optimizing the rendering of parts of the Card component.
ToDo: come up with the best rendering optimization solution.

interface ICardInner {
  avatar: string | null;
  name: string;
  city: string;
  review: string;
}

const CardInner = React.memo(({ avatar, name, city, review }: ICardInner) => {
  return (
    <>
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
    </>
  )
}) */