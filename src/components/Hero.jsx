
import { Camera } from "lucide-react";
import { Button } from "../ui/Button";
import bg from "../assets/agurchu_img2.jpg"
import Carousel from "./Carousel";


export default function Hero() {
  return (
      <section className="relative h-max bg-primary-1 py-20 z-0">   
 
        <div className="opacity-75 absolute -z-10 left-0 right-0 top-0 bottom-0 ">
            <img className="object-cover h-full w-full" src={bg} alt="" />
        </div>
      <div className="container mx-auto px-4 text-center ">
        <h1 className="text-4xl md:text-6xl font-bold text-accent mb-6">
          Agurchu <span className="text-secondary-1">Media</span>  Production
        </h1>
        <p className="text-xl text-secondary-2 mb-8 max-w-2xl mx-auto">
          Crafting immersive music and media experiences with passion and precision.
        </p>
        <div className="flex justify-center gap-4">
          <Button as="NavLink" to="/booking" className="bg-secondary-2 text-primary-1">
            Book a Session
          </Button>
          <Button as="NavLink" to="/portfolio" variant="outline">
            View Portfolio
          </Button>
        </div>
             <Camera className="w-12 h-12 mx-auto text-secondary-1 mt-4 mb-20 md:mb-44 sm:mb-20" />
      </div>

      <div className="absolute bottom-0 shadow-lg left-10 right-10 sm:left-32 sm:right-32 ">
        <Carousel/>
        {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/EC9LpULdC3Q?si=ViQkeeFMpkYdAl2i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
      </div>
    </section>
  );
}