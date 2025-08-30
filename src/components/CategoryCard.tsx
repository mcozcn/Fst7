import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: string;
  workoutCount: number;
  onExplore: () => void;
}

export function CategoryCard({ title, description, icon, workoutCount, onExplore }: CategoryCardProps) {
  return (
    <Card variant="feature" className="text-center group cursor-pointer">
      <CardContent className="p-6">
        <div className="relative mb-4 flex justify-center">
          <img 
            src={icon} 
            alt={title}
            className="w-16 h-16 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-2">{description}</p>
        <p className="text-sm text-primary font-medium mb-4">{workoutCount} antrenman</p>
        
        <Button 
          variant="secondary" 
          className="w-full"
          onClick={onExplore}
        >
          Keşfet
        </Button>
      </CardContent>
    </Card>
  );
}