import React, { useState, useEffect } from "react";

interface ImageCarouselProps {
  images: string[];
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Simple timer for carousel rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
    setError(null);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setError("Failed to load image");
  };

  return (
    <figure
      className={`relative ${className}`}
      role="region"
      aria-label="Image carousel"
    >
      <div className="relative w-full h-full bg-gray-200 dark:bg-gray-700 overflow-hidden rounded-t-lg">
        {isLoading && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            role="status"
          >
            <div
              className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
              aria-label="Loading image"
            ></div>
          </div>
        )}
        {error && (
          <div
            className="absolute inset-0 flex items-center justify-center text-red-500"
            role="alert"
          >
            {error}
          </div>
        )}
        <img
          src={images[currentIndex]}
          alt={`Project preview ${currentIndex + 1} of ${images.length}`}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="eager"
          decoding="async"
        />
        <nav
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/60 px-3 py-1.5 rounded-full"
          aria-label="Carousel navigation"
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to image ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            />
          ))}
        </nav>
      </div>
    </figure>
  );
};

export default ImageCarousel;
