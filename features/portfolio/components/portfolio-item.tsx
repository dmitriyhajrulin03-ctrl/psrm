export interface PortfolioItemProps {
  title: string;
  description: string;
  image: string;
}

export function PortfolioItem({ title, description, image }: PortfolioItemProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}



