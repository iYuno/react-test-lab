import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { reviews } from "@/shared/config/consts";
import { CarouselApi } from '@/shared/ui';

export function useReviewsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [activeSlide, setActiveSlide] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const activeSlideRef = useRef<HTMLDivElement | null>(null);

  const slidesToShow = useMemo(() => {
    if (window.innerWidth < 768) return 0;
    if (window.innerWidth < 1280) return 1;
    return 2;
  }, [window.innerWidth]);

  // ToDo: optimize this effect
  const updateSlidesInView = useCallback((api: CarouselApi) => {
    if (!api) return;
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
  }, []);

  useEffect(() => {
    if (!api) return;
    api.on('slidesInView', updateSlidesInView);
    
    return () => {
      api.off('slidesInView', updateSlidesInView);
    };
  }, [api, updateSlidesInView]);

  useEffect(() => {
    updateContainerHeight();
  }, [activeSlide, updateContainerHeight, api]);

  const shouldShowPagination = reviews.length > slidesToShow;
  const paginationDots = useMemo(() => {
    return Array.from({ length: reviews.length - slidesToShow });
  }, [reviews.length, slidesToShow]);

  return {
    api,
    setApi,
    activeSlide,
    activeSlideRef,
    containerHeight,
    slidesToShow,
    shouldShowPagination,
    paginationDots,
    carouselRef
  };
}