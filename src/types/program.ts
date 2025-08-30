export interface Exercise {
  id: string;
  name: string;
  sets: string;
  reps: string;
  rest: string;
  tempo: string;
  setup: string;
  movement: string;
  commonMistakes: string;
  alternatives: string;
}

export interface WorkoutDay {
  id: string;
  name: string;
  title: string;
  description: string;
  exercises: Exercise[];
  coreAndCardio?: string[];
}

export interface ProgramPhase {
  id: string;
  name: string;
  title: string;
  description: string;
  weeklySchedule: string[];
  goals: string[];
  workoutDays: WorkoutDay[];
  notes: {
    rir: string;
    progression: string;
    fst7: string;
    restBetween: string;
    additional?: string;
  };
}

export interface FitnessProgram {
  id: string;
  name: string;
  description: string;
  phases: ProgramPhase[];
}