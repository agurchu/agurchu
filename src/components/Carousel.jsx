// src/components/Carousel.jsx

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import ReactPlayer from 'react-player';
import carouselItems from '../data/carouselData';
import cn from '../lib/cn';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Carousel() {
     
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [error, setError] = useState(null);

  // Auto-advance slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
      // setError(null); // Reset error on slide change
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
    // setError(null);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    // setError(null);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    // setError(null);
  };

  // const currentItem = carouselItems[currentIndex];


  return (
      <div className="mt-1 container h mx-auto px-4 translate-y-10" role="region" aria-label="Media carousel">
      <div className=" rounded-lg shadow-lg overflow-hidden">
        {/* Slide Container */}
        <div className="relative w-full h-[450px]">
          <div
            className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
          {carouselItems.map((item) => (
            <div key={item.id} className="w-full h-full flex-shrink-0 flex flex-col justify-between p-6 text-center">
                  {/* Media Area */}
              <div className="relative w-full h-full flex items-center justify-center">
                
                <Link className='bottom-0 top-0 left-0 right-0 absolute'>
                {item.type === "reel" ?
                 (
                        item.mediaUrl    
                ):  ( 

                        <img
                          src={item.mediaUrl}
                          alt={item.title}
                          className="w-full h-full -z-10 object-cover rounded-lg"
                        />
                    )}</Link>  
                    <Button
                  as="NavLink"
                  to={item.type === 'special' ? '/booking' : '/portfolio'}
                  variant="outline"
                  className=" z-0 bg-primary-1"
                >
                  {item.type === 'special' ? 'Book Now' : 'View More'}
                </Button> </div>
               {/* Content Area */}


               <div className="mt-5 flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-secondary-2">{item.title}</h3>
                  <p className="text-secondary-2 mt-2">{item.description}</p>
               
              </div>
                </div>
                   
           
          ))}
            </div>
      {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary-1/80 hover:bg-secondary-1 text-accent p-2 rounded-full transition-colors z-10"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary-1/80 hover:bg-secondary-1 text-accent p-2 rounded-full transition-colors z-10"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicators */}
        <div className="flex justify-center space-x-2 py-4 ">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                'w-3 h-3 rounded-full transition-colors',
                currentIndex === index ? 'bg-secondary-1' : 'bg-secondary-2 hover:bg-secondary-1'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;