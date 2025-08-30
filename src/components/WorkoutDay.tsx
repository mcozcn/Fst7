import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Calendar, Activity, Heart } from "lucide-react";
import { useState } from "react";
import { WorkoutDay as WorkoutDayType } from "@/types/program";
import { ExerciseCard } from "./ExerciseCard";
import { useToast } from "@/hooks/use-toast";

interface WorkoutDayProps {
  workoutDay: WorkoutDayType;
}

export function WorkoutDay({ workoutDay }: WorkoutDayProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleStartWorkout = () => {
    toast({
      title: "Antrenman Başlıyor!",
      description: `${workoutDay.title} antrenmana başlıyorsunuz. Başarılar!`,
    });
  };

  return (
    <Card variant="feature" className="mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
              {workoutDay.name.split(' ')[1]}
            </div>
            <div>
              <CardTitle className="text-xl">{workoutDay.title}</CardTitle>
              <p className="text-muted-foreground text-sm">{workoutDay.description}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="hero" onClick={handleStartWorkout}>
              <Activity className="w-4 h-4 mr-2" />
              Başla
            </Button>
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="outline" size="icon">
                  <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </Button>
              </CollapsibleTrigger>
            </Collapsible>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {workoutDay.exercises.length} Egzersiz
          </Badge>
        </div>
      </CardHeader>

      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleContent>
          <CardContent>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg mb-4">Egzersizler</h4>
              
              {workoutDay.exercises.map((exercise, index) => (
                <ExerciseCard key={exercise.id} exercise={exercise} index={index} />
              ))}

              {workoutDay.coreAndCardio && workoutDay.coreAndCardio.length > 0 && (
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Heart className="w-4 h-4 text-accent" />
                    <h4 className="font-semibold">Core & Kardiyo</h4>
                  </div>
                  <ul className="space-y-1">
                    {workoutDay.coreAndCardio.map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}