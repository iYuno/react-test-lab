import { EmblaCarouselType } from 'embla-carousel';
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { reviews } from "@/shared/config/consts";

export function useReviewsCarousel() {
  const [api, setApi] = useState<EmblaCarouselType>();
  const [activeSlide, setActiveSlide] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

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
