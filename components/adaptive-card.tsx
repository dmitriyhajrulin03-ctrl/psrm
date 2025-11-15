import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface AdaptiveCardProps {
  title: string;
  image?: string;
  description: string;
}

export function AdaptiveCard({ title, image, description }: AdaptiveCardProps) {
  return (
    <div className="@container">
      <Card className="
        flex flex-col gap-3 p-fluid-md border rounded-lg
        @sm:flex-row @sm:gap-4
        @lg:grid @lg:grid-cols-[200px_1fr]
      ">
        {image && (
          <img 
            src={image} 
            alt={title}
            className="w-full @sm:w-32 @lg:w-full rounded-md object-cover" 
          />
        )}
        <div>
          <CardHeader className="p-0">
            <CardTitle className="text-fluid-xl">{title}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-muted-foreground text-fluid-sm">{description}</p>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}





