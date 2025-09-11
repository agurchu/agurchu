// src/components/Carousel.jsx
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactPlayer from 'react-player';
import carouselItems from '../data/carouselData';
import cn from '../lib/cn';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';


function Carousel() {
     
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
    <div className="container mx-auto px-4 w-full z-0"  role="region" aria-label="Media carousel">
      <div className=" z-0 md:h-72 h-60 rounded-lg shadow-lg ">
        <Slider {...settings}>
          {carouselItems.map((item) => (
            <div key={item.id} className="px-4 h-full z-0 relative rounded-lg">
               
              <div
                className={cn(
                  'text-center items-center h-full flex flex-col justify-between'
                )}
              >
                
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
                    )
          }</Link>
               
                <Button
                  as="NavLink"
                  to={item.type === 'special' ? '/booking' : '/portfolio'}
                  variant="outline"
                  className="my-4 z-0 bg-primary-1"
                >
                  {item.type === 'special' ? 'Book Now' : 'View More'}
                </Button>
              </div>
              <div className="mt-4 z-10 translate-y-20">
                  <h3 className="text-xl font-semibold text-primary-1">{item.title}</h3>
                  <p className="text-primary-1 mt-2">{item.description}</p>
                </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;