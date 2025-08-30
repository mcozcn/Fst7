import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Target, TrendingUp, Clock, Zap, Info } from "lucide-react";
import { useState } from "react";
import { ProgramPhase as ProgramPhaseType } from "@/types/program";
import { WorkoutDay } from "./WorkoutDay";

interface ProgramPhaseProps {
  phase: ProgramPhaseType;
  phaseNumber: number;
}

export function ProgramPhase({ phase, phaseNumber }: ProgramPhaseProps) {
  const [isOpen, setIsOpen] = useState(phaseNumber === 1);

  return (
    <Card variant="elevated" className="mb-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold text-xl">
              {phaseNumber}
            </div>
            <div>
              <CardTitle className="text-2xl">{phase.title}</CardTitle>
              <p className="text-muted-foreground mt-1">{phase.description}</p>
            </div>
          </div>
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="outline">
                {isOpen ? 'Gizle' : 'Detayları Göster'}
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
          </Collapsible>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant="outline" className="flex items-center gap-1">
            <Target className="w-3 h-3" />
            {phase.workoutDays.length} Antrenman Günü
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            4 Hafta
          </Badge>
        </div>
      </CardHeader>

      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleContent>
          <CardContent>
            <div className="space-y-6">
              {/* Hedefler */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Amaçlar</h3>
                </div>
                <ul className="space-y-1">
                  {phase.goals.map((goal, index) => (
                    <li key={index} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Haftalık Program */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <h3 className="text-lg font-semibold">Haftalık Düzen</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {phase.weeklySchedule.map((day, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-muted/30 rounded-lg">
                      <span className="font-medium text-primary">{day.split(':')[0]}:</span>
                      <span className="text-sm">{day.split(':')[1]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Antrenman Günleri */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-semibold">Antrenman Detayları</h3>
                </div>
                <div className="space-y-4">
                  {phase.workoutDays.map((workoutDay) => (
                    <WorkoutDay key={workoutDay.id} workoutDay={workoutDay} />
                  ))}
                </div>
              </div>

              {/* Program Notları */}
              <div className="bg-primary/5 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Program Notları</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div><strong>RIR:</strong> {phase.notes.rir}</div>
                  <div><strong>Progresyon:</strong> {phase.notes.progression}</div>
                  <div><strong>FST-7:</strong> {phase.notes.fst7}</div>
                  <div><strong>Hareketler Arası Geçiş:</strong> {phase.notes.restBetween}</div>
                  {phase.notes.additional && (
                    <div><strong>Ek Notlar:</strong> {phase.notes.additional}</div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}

import { Calendar } from "lucide-react";