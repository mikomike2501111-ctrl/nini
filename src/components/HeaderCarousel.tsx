import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeaderCarouselProps {
  images?: string[];
}

export default function HeaderCarousel({ images = [] }: HeaderCarouselProps) {
  const defaultImages = [
    'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3622617/pexels-photo-3622617.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  const carouselImages = images.length > 0 ? images : defaultImages;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  return (
    <div className="w-1/3 hidden lg:flex items-center overflow-hidden rounded-lg border border-gray-200">
      <div className="relative w-full aspect-square">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Header carousel slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 text-gray-900" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 text-gray-900" />
        </button>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
