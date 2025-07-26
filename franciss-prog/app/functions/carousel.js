

export const nextSlide = (currentSlide, slidesLength) => {
    return currentSlide === slidesLength - 1 ? 0 : currentSlide + 1;
};
  

export const prevSlide = (currentSlide, slidesLength) => {
    return currentSlide === 0 ? slidesLength - 1 : currentSlide - 1;
};
  