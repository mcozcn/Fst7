import { Button } from "@/components/ui/button";
import { WorkoutCard } from "@/components/WorkoutCard";
import { CategoryCard } from "@/components/CategoryCard";
import { Play, Target, Trophy, Zap, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

import fitnessHero from "@/assets/fitness-hero.jpg";
import strengthIcon from "@/assets/strength-icon.jpg";
import cardioIcon from "@/assets/cardio-icon.jpg";
import yogaIcon from "@/assets/yoga-icon.jpg";

const Index = () => {
  const { toast } = useToast();

  const handleStartWorkout = (workoutName: string) => {
    toast({
      title: "Antrenman Başlıyor!",
      description: `${workoutName} antrenmana başlıyorsunuz. Başarılar!`,
    });
  };

  const handleExploreCategory = (category: string) => {
    toast({
      title: "Kategori Keşfediliyor",
      description: `${category} kategorisindeki antrenmanları görüntülüyorsunuz.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={fitnessHero} 
            alt="Fitness Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Fit<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-glow to-accent">ness</span> Journey
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Hedeflerinize ulaşın, sınırlarınızı aşın ve en iyi versiyonunuz olun!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-4"
              onClick={() => handleStartWorkout("Günlük Antrenman")}
            >
              <Play className="w-5 h-5 mr-2" />
              Hemen Başla
            </Button>
            <Link to="/programs">
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Antrenman Programları
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm opacity-80">Antrenman</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-sm opacity-80">Aktif Kullanıcı</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">4.9</div>
              <div className="text-sm opacity-80">Kullanıcı Puanı</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Antrenman Kategorileri</h2>
            <p className="text-xl text-muted-foreground">Size uygun antrenman türünü seçin</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CategoryCard
              title="Güç Antrenmanı"
              description="Kas gücünüzü artırın ve vücut yapınızı geliştirin"
              icon={strengthIcon}
              workoutCount={120}
              onExplore={() => handleExploreCategory("Güç Antrenmanı")}
            />
            <CategoryCard
              title="Kardiyovasküler"
              description="Dayanıklılığınızı artırın ve kalp sağlığınızı güçlendirin"
              icon={cardioIcon}
              workoutCount={85}
              onExplore={() => handleExploreCategory("Kardiyovasküler")}
            />
            <CategoryCard
              title="Yoga & Esneklik"
              description="Esnekliğinizi artırın ve zihinsel dengenizi bulun"
              icon={yogaIcon}
              workoutCount={60}
              onExplore={() => handleExploreCategory("Yoga & Esneklik")}
            />
          </div>
        </div>
      </section>

      {/* Featured Workouts */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Öne Çıkan Antrenmanlar</h2>
            <p className="text-xl text-muted-foreground">Popüler ve etkili antrenmanlar</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/programs">
              <WorkoutCard
                title="FST-7 Bodybuilding"
                description="Profesyonel bodybuilding programı"
                duration="5 gün/hafta"
                difficulty="İleri"
                participants="1.2K+"
                image={strengthIcon}
                onStart={() => {}}
              />
            </Link>
            <WorkoutCard
              title="HIIT Cardio Blast"
              description="Yoğun interval antrenmanı"
              duration="25 dk"
              difficulty="Orta"
              participants="2.4K+"
              image={cardioIcon}
              onStart={() => handleStartWorkout("HIIT Cardio Blast")}
            />
            <WorkoutCard
              title="Morning Yoga Flow"
              description="Günlük başlangıç yoga seansı"
              duration="30 dk"
              difficulty="Başlangıç"
              participants="3.2K+"
              image={yogaIcon}
              onStart={() => handleStartWorkout("Morning Yoga Flow")}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-primary rounded-3xl p-12 text-white">
            <Trophy className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-4xl font-bold mb-4">Fitness Yolculuğunuza Başlayın</h2>
            <p className="text-xl mb-8 opacity-90">
              Kişiselleştirilmiş antrenman planları, uzman rehberliği ve motive edici topluluk ile hedeflerinize ulaşın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
              >
                <Zap className="w-5 h-5 mr-2" />
                Ücretsiz Başla
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10"
              >
                Daha Fazla Bilgi
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;