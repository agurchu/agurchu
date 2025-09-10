// src/components/Carousel.jsx
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactPlayer from 'react-player';
import carouselItems from '../data/carousel';
import cn from '../lib/cn';
import { Button } from '../ui/Button';
import { useState } from 'react';

function Carousel() {
      const [error, setError] = useState(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show only one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: true, // Center the slide for a focused look
    centerPadding: '0px', // No padding to keep the slide full-width within the container
  };

  return (
    <div className="container mx-auto px-4 h-full w-full"  role="region" aria-label="Media carousel">
      <div className="bg-primary-2 rounded-lg shadow-lg overflow-hidden">
        <Slider {...settings}>
          {carouselItems.map((item) => (
            <div key={item.id} className="px-4">
              <div
                className={cn(
                  'text-center p-6 h-[450px] flex flex-col justify-between'
                )}
              >
                {item.type === 'reel' ? (
                  <div className="relative w-full h-64">
                    <ReactPlayer
                      url={item.mediaUrl} // Handles YouTube URLs
                      light={true} // Use provided thumbnail or YouTube default
                      playing={true} // Autoplay disabled for better UX
                      muted
                      loop
                      width="100%"
                      height="100%"
                      className="rounded-lg"
                      config={{
                        youtube: {
                          playerVars: { showinfo: 0, controls: 1,rel: 0, },
                        },
                      }}
                       onError={(e) =>
                          setError({ id: item.id, message: 'Video unavailable' })
                        }
                    />
                  </div>
                ) : (
                  <img
                    src={item.mediaUrl}
                    alt={item.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                )}
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-accent">{item.title}</h3>
                  <p className="text-secondary-2 mt-2">{item.description}</p>
                </div>
                <Button
                  as="NavLink"
                  to={item.type === 'special' ? '/booking' : '/portfolio'}
                  variant="outline"
                  className="mt-4"
                >
                  {item.type === 'special' ? 'Book Now' : 'View More'}
                </Button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;