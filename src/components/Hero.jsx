
import { Camera } from "lucide-react";
import { Button } from "../ui/Button";

export default function Hero() {
  return (
      <section className="relative bg-primary-1 py-20">
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Camera className="w-12 h-12 text-black mb-4" />
      <h1 className="text-3xl font-bold">Agurchu Media Production</h1>
      <Button className="mt-6">Get Started</Button>
    </div>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-accent mb-6">
          Agurchu Media Production
        </h1>
        <p className="text-xl text-secondary-2 mb-8 max-w-2xl mx-auto">
          Crafting immersive music and media experiences with passion and precision.
        </p>
        <div className="flex justify-center gap-4">
          <Button as="NavLink" to="/booking" className="bg-secondary-1 text-primary-1">
            Book a Session
          </Button>
          <Button as="NavLink" to="/portfolio" variant="outline">
            View Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}