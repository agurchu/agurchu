import { Button } from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";


export default function Booking() {
  return (
    <Section>
      <Container>
        <h1 className="text-4xl font-bold text-center mb-12">Book a Session</h1>
        <form className="max-w-lg mx-auto space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 bg-primary-2 rounded-lg border border-secondary-2 focus:ring-2 focus:ring-secondary-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 bg-primary-2 rounded-lg border border-secondary-2 focus:ring-2 focus:ring-secondary-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Project Details
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full p-3 bg-primary-2 rounded-lg border border-secondary-2 focus:ring-2 focus:ring-secondary-1"
              required
            ></textarea>
          </div>
          <Button type="submit" className="w-full">
            Submit Booking Request
          </Button>
        </form>
      </Container>
    </Section>
  );
}
