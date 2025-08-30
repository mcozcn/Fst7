import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Timer, Repeat, Clock, Target, AlertTriangle, RefreshCw } from "lucide-react";
import { useState } from "react";
import { Exercise } from "@/types/program";

interface ExerciseCardProps {
  exercise: Exercise;
  index: number;
}

export function ExerciseCard({ exercise, index }: ExerciseCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card variant="workout" className="mb-4">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="w-8 h-8 rounded-full flex items-center justify-center">
              {index + 1}
            </Badge>
            <CardTitle className="text-lg">{exercise.name}</CardTitle>
          </div>
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
          </Collapsible>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Repeat className="w-3 h-3" />
            {exercise.sets} × {exercise.reps}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Timer className="w-3 h-3" />
            {exercise.rest}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {exercise.tempo}
          </Badge>
        </div>
      </CardHeader>

      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleContent>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-primary" />
                  <h4 className="font-semibold text-sm">Kurulum</h4>
                </div>
                <p className="text-sm text-muted-foreground">{exercise.setup}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <RefreshCw className="w-4 h-4 text-secondary" />
                  <h4 className="font-semibold text-sm">Hareket</h4>
                </div>
                <p className="text-sm text-muted-foreground">{exercise.movement}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                  <h4 className="font-semibold text-sm">Sık Hatalar</h4>
                </div>
                <p className="text-sm text-muted-foreground">{exercise.commonMistakes}</p>
              </div>

              <div className="bg-muted/50 rounded-lg p-3">
                <h4 className="font-semibold text-sm mb-1">Alternatifler</h4>
                <p className="text-sm text-muted-foreground">{exercise.alternatives}</p>
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}