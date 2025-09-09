import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import Testimonial from '../components/Testimonial';
import services from '../data/services';
import projects from '../data/projects';
import testimonials from '../data/testimonials';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';

export default function Home() {
  return (
    <>
      <Hero />
      <Section>
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-primary-2">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map((testimonial) => (
              <Testimonial key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
