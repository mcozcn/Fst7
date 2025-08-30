import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, TrendingUp } from "lucide-react";

interface WorkoutCardProps {
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  participants: string;
  image: string;
  onStart: () => void;
}

export function WorkoutCard({ title, description, duration, difficulty, participants, image, onStart }: WorkoutCardProps) {
  return (
    <Card variant="workout" className="overflow-hidden group cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            <span>{difficulty}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{participants}</span>
          </div>
        </div>
        
        <Button 
          variant="hero" 
          className="w-full"
          onClick={onStart}
        >
          Antrenmana Başla
        </Button>
      </CardContent>
    </Card>
  );
}