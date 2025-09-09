import Card from './ui/Card';

export default function ServiceCard({ title, description, icon }) {
  return (
    <Card className="p-6 text-center">
      <img src={icon} alt={title} className="w-12 h-12 mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-secondary-2">{description}</p>
    </Card>
  );
}
