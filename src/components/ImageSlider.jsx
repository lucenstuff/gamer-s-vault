import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function ImageSlider({
  children: slides,
  autoSlideInterval = 3000,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const intervalRef = useRef(); // Ref for the interval ID

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const startAutoSlide = () => {
    stopAutoSlide(); // Clear any existing interval
    intervalRef.current = setInterval(goToNextSlide, autoSlideInterval);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [slides.length, autoSlideInterval, startAutoSlide]);

  // Touch event handlers
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchStart(touchDown);
    stopAutoSlide();
  };

  const handleTouchMove = (e) => {
    if (!touchStart) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (diff > 5) {
      goToNextSlide();
    } else if (diff < -5) {
      setActiveIndex(
        (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
      );
    }

    setTouchStart(null);
    startAutoSlide();
  };
  return (
    <div className="overflow-hidden relative">
      <div
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          transition: "transform 0.5s ease-out",
        }}
        className="flex"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={startAutoSlide}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>
      <div className="flex justify-center absolute inset-x-0 bottom-0 mb-3">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full border-2 border-neutral-500 mx-1 cursor-pointer ${
              index === activeIndex
                ? "border-neutral-500 bg-neutral-500"
                : "bg-transparent"
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

ImageSlider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  autoSlideInterval: PropTypes.number,
};
