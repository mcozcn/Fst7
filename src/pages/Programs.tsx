import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgramPhase } from "@/components/ProgramPhase";
import { BookOpen, Target, TrendingUp, Clock, ArrowLeft } from "lucide-react";
import { fitnessProgram } from "@/data/programData";
import { Link } from "react-router-dom";

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-hero py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/">
              <Button variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Ana Sayfa
              </Button>
            </Link>
          </div>
          
          <div className="text-white text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Antrenman <span className="text-primary-glow">Programları</span>
            </h1>
            <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
              Profesyonel fitness programları ile hedeflerinize ulaşın
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2 bg-white/20 text-white border-white/30">
                <Clock className="w-4 h-4 mr-2" />
                12 Hafta
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2 bg-white/20 text-white border-white/30">
                <Target className="w-4 h-4 mr-2" />
                3 Faz
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2 bg-white/20 text-white border-white/30">
                <TrendingUp className="w-4 h-4 mr-2" />
                Progresif
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Card variant="feature" className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle className="text-2xl">{fitnessProgram.name}</CardTitle>
                  <p className="text-muted-foreground">{fitnessProgram.description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">Faz 1</div>
                  <div className="text-sm font-medium mb-1">Adaptasyon</div>
                  <div className="text-xs text-muted-foreground">Hafta 1-4</div>
                </div>
                <div className="text-center p-4 bg-secondary/5 rounded-lg">
                  <div className="text-3xl font-bold text-secondary mb-2">Faz 2</div>
                  <div className="text-sm font-medium mb-1">Gelişim</div>
                  <div className="text-xs text-muted-foreground">Hafta 5-8</div>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-2">Faz 3</div>
                  <div className="text-sm font-medium mb-1">Doruk</div>
                  <div className="text-xs text-muted-foreground">Hafta 9-12</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Program Phases */}
          <div className="space-y-8">
            {fitnessProgram.phases.map((phase, index) => (
              <ProgramPhase 
                key={phase.id} 
                phase={phase} 
                phaseNumber={index + 1} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Programa Başlamaya Hazır mısınız?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Sistematik yaklaşım ile fitness hedeflerinize ulaşın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Target className="w-5 h-5 mr-2" />
              Programa Başla
            </Button>
            <Link to="/">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Ana Sayfaya Dön
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;