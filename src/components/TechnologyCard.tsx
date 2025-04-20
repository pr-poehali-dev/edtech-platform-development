import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface TechnologyCardProps {
  title: string;
  description: string;
  imageUrl: string;
  ctaText?: string;
}

const TechnologyCard = ({ 
  title, 
  description, 
  imageUrl, 
  ctaText = "Подробнее" 
}: TechnologyCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl || "/placeholder.svg"} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105" 
        />
      </div>
      <CardHeader>
        <CardTitle className="text-edtech-dark">{title}</CardTitle>
        <CardDescription>{description.substring(0, 100)}...</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">
          {description.substring(100, 200)}...
        </p>
      </CardContent>
      <CardFooter>
        <Button className="bg-edtech-primary hover:bg-edtech-secondary">
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TechnologyCard;
