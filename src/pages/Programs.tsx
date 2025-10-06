import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { WorkoutDay } from "@/components/WorkoutDay";
import { ArrowLeft, Calendar, Target, TrendingUp, Users } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { fitnessProgram, splitProgram } from "@/data/programData";

const Programs = () => {
  const [searchParams] = useSearchParams();
  const programType = searchParams.get("program") || "fst7";
  const program = programType === "split" ? splitProgram : fitnessProgram;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <Button variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Ana Sayfa
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">{program.name}</h1>
              <p className="text-xl mb-8 opacity-90">{program.description}</p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">{program.workoutDays.length}</div>
                  <div className="text-sm opacity-80">Antrenman Günü</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">{7 - program.workoutDays.length}</div>
                  <div className="text-sm opacity-80">Dinlenme Günü</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Haftalık Program</h3>
              <div className="space-y-2">
                {program.weeklySchedule.map((day, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Program Selector */}
          <div className="flex justify-center gap-4 mb-8">
            <Link to="/programs?program=fst7">
              <Button 
                variant={programType === "fst7" ? "default" : "outline"}
                size="lg"
              >
                FST-7 (5 Gün)
              </Button>
            </Link>
            <Link to="/programs?program=split">
              <Button 
                variant={programType === "split" ? "default" : "outline"}
                size="lg"
              >
                Split (3 Gün)
              </Button>
            </Link>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">{program.name}</CardTitle>
              <CardDescription className="text-lg">{program.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <Target className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Hedefler</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {program.goals.map((goal, index) => (
                      <li key={index}>• {goal}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <TrendingUp className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Progression</h3>
                  <p className="text-sm text-muted-foreground">{program.notes.progression}</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <Users className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">FST-7 Tekniği</h3>
                  <p className="text-sm text-muted-foreground">{program.notes.fst7}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Workout Days */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8">Antrenman Günleri</h2>
            {program.workoutDays.map((workoutDay) => (
              <WorkoutDay key={workoutDay.id} workoutDay={workoutDay} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-primary rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Programa Başlamaya Hazır mısın?</h2>
            <p className="text-xl mb-8 opacity-90">
              FST-7 tekniği ile kas hipertrofisini maksimize et ve hedeflerine ulaş!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
              >
                Programa Başla
              </Button>
              <Link to="/">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10"
                >
                  Ana Sayfaya Dön
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;