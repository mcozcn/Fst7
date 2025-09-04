import { FitnessProgram } from "@/types/program";

export const fitnessProgram: FitnessProgram = {
  id: "fst7-bodybuilding-program",
  name: "FST-7 Bodybuilding Programı",
  description: "Haftalık dağılım ile profesyonel bodybuilding antrenman programı - FST-7 teknikleri ile kas hipertrofisi",
  weeklySchedule: [
    "Pazartesi: Göğüs (16-20 set)",
    "Salı: Omuz (20-25 set)", 
    "Çarşamba: Sırt (16-20 set)",
    "Perşembe: Kol (Triceps + Biceps, 26-32 set)",
    "Cuma: Bacak (19-22 set)",
    "Cumartesi: Dinlenme",
    "Pazar: Dinlenme"
  ],
  goals: [
    "Maksimum kas hipertrofisi",
    "FST-7 teknikleri ile pompaj",
    "Form öncelikli antrenman",
    "Progresif ağırlık artışı",
    "Optimal toparlanma"
  ],
  workoutDays: [
    {
      id: "chest-day",
      name: "Pazartesi",
      title: "Göğüs (16-20 set)",
      description: "En etkili hareketler: Bench press ve dips (yüksek pectoralis aktivasyonu), flyes izolasyon için",
      exercises: [
        {
          id: "barbell-incline-bench-press",
          name: "Barbell Incline Bench Press",
          sets: "4",
          reps: "8-12",
          rest: "60-90 sn",
          tempo: "Kontrollü",
          setup: "30° incline, barı göğüse indir, göğüsle it, tam ROM",
          movement: "Barı göğüs hizasına kontrollü indir, göğüs kaslarını sıkarak yukarı it",
          commonMistakes: "Omuz yüklenmesin, bel kavisli olmasın",
          alternatives: "Dumbbell Incline Press"
        },
        {
          id: "barbell-flat-bench-press",
          name: "Barbell Flat Bench Press",
          sets: "3",
          reps: "8-12",
          rest: "60-90 sn",
          tempo: "Yavaş negatif",
          setup: "Düz bank, barı orta göğüse indir",
          movement: "Barı göğüs ortasına kontrollü indir, güçlü şekilde yukarı it",
          commonMistakes: "Dirsekler 45°, sırtı kaldırma",
          alternatives: "Guillotine Press"
        },
        {
          id: "weighted-dips",
          name: "Weighted Dips",
          sets: "3",
          reps: "8-12",
          rest: "60-90 sn",
          tempo: "Kontrollü",
          setup: "Göğüs öne eğik, dirsekleri aç, derin in",
          movement: "Vücudu aşağı indir, göğüs kaslarını sıkarak yukarı it",
          commonMistakes: "Omuz ağrısı varsa nötr tutuş",
          alternatives: "Chest Dips (makine)"
        },
        {
          id: "pec-deck-flyes",
          name: "Pec Deck Flyes",
          sets: "3",
          reps: "8-12",
          rest: "60-90 sn",
          tempo: "2 sn zirve sıkma",
          setup: "Oturarak, kolları birleştir",
          movement: "Kolları kontrollü şekilde birleştir, zirvede 2 saniye sık",
          commonMistakes: "Omuz öne çıkmasın, hafif kilo",
          alternatives: "Cable Crossovers"
        },
        {
          id: "cable-crossovers-fst7",
          name: "Cable Crossovers (FST-7)",
          sets: "7",
          reps: "8-12",
          rest: "30-45 sn",
          tempo: "Pompayı hisset",
          setup: "Orta kablo, göğüsü sık",
          movement: "Kolları göğüs önünde birleştir, pompaj hissini yaşa",
          commonMistakes: "Pompayı hisset",
          alternatives: "Dumbbell Flyes (yatay bank)"
        }
      ]
    },
    {
      id: "shoulder-day",
      name: "Salı",
      title: "Omuz (20-25 set)",
      description: "En etkili: Overhead press (ön), lateral raises (yan), reverse flyes (arka) için yüksek EMG",
      exercises: [
        {
          id: "barbell-overhead-press",
          name: "Barbell Overhead Press",
          sets: "4",
          reps: "10-12",
          rest: "60-90 sn",
          tempo: "Kontrollü",
          setup: "Ayakta/oturarak, barı kulak hizasına indir",
          movement: "Barı kulak hizasından yukarı doğru it, kontrollü indir",
          commonMistakes: "Sırt nötr, momentum yok",
          alternatives: "Seated Dumbbell Press"
        },
        {
          id: "dumbbell-lateral-raises",
          name: "Dumbbell Lateral Raises",
          sets: "3",
          reps: "10-12",
          rest: "60-90 sn",
          tempo: "Kontrollü",
          setup: "Hafif öne eğil, pinky yukarı, yan deltoidi izole et",
          movement: "Kolları yanlara doğru kaldır, yan deltoid kasını sık",
          commonMistakes: "Dirsek kilitleme yok",
          alternatives: "Cable Lateral Raises"
        },
        {
          id: "face-pulls",
          name: "Face Pulls",
          sets: "3",
          reps: "10-12",
          rest: "60-90 sn",
          tempo: "Kontrollü",
          setup: "Yüksek kablo, yüze çek, arka deltoid ve trapezius",
          movement: "Kabloyu yüz hizasına çek, arka deltoid kasını sık",
          commonMistakes: "Göğüs öne, sırt sık",
          alternatives: "Seated Rear Lateral Raises"
        },
        {
          id: "cable-front-raises",
          name: "Cable Front Raises",
          sets: "3",
          reps: "10-12",
          rest: "60-90 sn",
          tempo: "Yavaş indir",
          setup: "Düşük kablo, omuz hizasına kaldır, ön deltoidi hedefle",
          movement: "Kabloyu öne doğru kaldır, ön deltoid kasını sık",
          commonMistakes: "Yavaş indir",
          alternatives: "Dumbbell Front Raises (incline)"
        },
        {
          id: "machine-reverse-flyes",
          name: "Machine Reverse Flyes",
          sets: "3",
          reps: "10-12",
          rest: "60-90 sn",
          tempo: "Kontrollü",
          setup: "Makinede ters, arka deltoidi aç, kürek kemiklerini birleştir",
          movement: "Kolları arkaya doğru aç, arka deltoid kasını sık",
          commonMistakes: "Omuz geriye",
          alternatives: "Bent-Over Dumbbell Flyes"
        },
        {
          id: "cable-y-raises",
          name: "Cable Y-Raises",
          sets: "3",
          reps: "10-12",
          rest: "60-90 sn",
          tempo: "Kontrollü",
          setup: "Düşük kablo, Y şeklinde kaldır, genel deltoid",
          movement: "Kolları Y şeklinde kaldır, tüm deltoid kaslarını çalıştır",
          commonMistakes: "Hafif kilo, form öncelik",
          alternatives: "45-Degree Incline Row"
        },
        {
          id: "barbell-seated-behind-neck-press-fst7",
          name: "Barbell Seated Behind Neck Press (FST-7)",
          sets: "7",
          reps: "10-12",
          rest: "30-45 sn",
          tempo: "Pompala",
          setup: "Oturarak, boyun arkasına indir, pompala",
          movement: "Barı boyun arkasından yukarı doğru it, pompaj hissini yaşa",
          commonMistakes: "Omuz mobilitesine dikkat",
          alternatives: "Machine Shoulder Press"
        }
      ]
    },
    {
      id: "back-day",
      name: "Çarşamba",
      title: "Sırt (16-20 set)",
      description: "En etkili: Pull-ups (lat), rows (orta sırt) için yüksek aktivasyon",
      exercises: [
        {
          id: "wide-grip-pull-ups",
          name: "Wide-Grip Pull-Ups",
          sets: "4",
          reps: "10-12",
          rest: "60-90 sn",
          tempo: "Kontrollü",
          setup: "Geniş tutuş, göğüse çek, lat'leri sık",
          movement: "Vücudu yukarı çek, göğsü bara yaklaştır, lat kaslarını sık",
          commonMistakes: "Yardımcı bant eğer zor",
          alternatives: "Lat Pulldown"
        },
        {
          id: "bent-over-barbell-row",
          name: "Bent-Over Barbell Row",
          sets: "3",
          reps: "10-12",
          rest: "60-90 sn",
          tempo: "Kontrollü",
          setup: "Eğil, barı karna çek, sırt orta kısmını hedefle",
          movement: "Barı karna doğru çek, sırt kaslarını sık",
          commonMistakes: "Sırt düz, bel yüklenme yok",
          alternatives: "T-Bar Row"
        },
        {
          id: "seated-cable-row",
          name: "Seated Cable Row",
          sets: "3",
          reps: "10-12",
          rest: "60-90 sn",
          tempo: "Kontrollü",
          setup: "Geniş tutuş, kürek kemiklerini birleştir",
          movement: "Kabloyu göğse doğru çek, kürek kemiklerini birleştir",
          commonMistakes: "Göğüs öne, momentum yok",
          alternatives: "Inverted Row"
        },
        {
          id: "single-arm-dumbbell-row",
          name: "Single-Arm Dumbbell Row",
          sets: "3",
          reps: "10-12",
          rest: "60-90 sn",
          tempo: "Kontrollü",
          setup: "Tek taraflı, dengesizliği düzelt, tam çek",
          movement: "Dumbbell'ı göğse doğru çek, sırt kaslarını sık",
          commonMistakes: "Taraf başına eşit",
          alternatives: "Unilateral Machine Row"
        },
        {
          id: "straight-arm-pulldown-fst7",
          name: "Straight-Arm Pulldown (FST-7)",
          sets: "7",
          reps: "10-12",
          rest: "30-45 sn",
          tempo: "2 sn bekle",
          setup: "Düz kol, lat'leri esnet, pompala",
          movement: "Düz kollarla kabloyu aşağı çek, lat kaslarını esnet",
          commonMistakes: "Göğüs altına çek",
          alternatives: "IYT Raises"
        }
      ]
    },
    {
      id: "arm-day",
      name: "Perşembe",
      title: "Kol (Triceps + Biceps, 26-32 set)",
      description: "En etkili: Dips ve overhead extensions (triceps), concentration curls ve chin-ups (biceps) için yüksek EMG",
      exercises: [
        {
          id: "rope-cable-pushdowns",
          name: "Rope Cable Pushdowns",
          sets: "3",
          reps: "10",
          rest: "60-90 sn",
          tempo: "Kontrollü",
          setup: "Dirsek sabit, triceps sık, lateral başı hedefle",
          movement: "Kabloyu aşağı doğru it, triceps kaslarını sık",
          commonMistakes: "Dirsek öne çıkmasın",
          alternatives: "Straight Bar Pushdowns"
        },
        {
          id: "close-grip-bench-press",
          name: "Close-Grip Bench Press",
          sets: "3",
          reps: "10",
          rest: "60-90 sn",
          tempo: "Kontrollü",
          setup: "Dar tutuş, göğüse indir",
          movement: "Barı göğüse indir, triceps ile yukarı it",
          commonMistakes: "Bel kavisli",
          alternatives: "Triangle Push-Ups"
        },
        {
          id: "ez-bar-skull-crushers",
          name: "EZ-Bar Skull Crushers",
          sets: "3",
          reps: "10",
          rest: "60-90 sn",
          tempo: "Yavaş negatif",
          setup: "Alın üstüne indir, yavaş negatif",
          movement: "Barı alın üstüne indir, triceps ile yukarı it",
          commonMistakes: "Dirsek sabit",
          alternatives: "JM Press"
        },
        {
          id: "overhead-cable-extensions-fst7",
          name: "Overhead Cable Extensions (FST-7)",
          sets: "7",
          reps: "10",
          rest: "30-45 sn",
          tempo: "Tam esnet",
          setup: "Overhead, tam esnet, uzun başı pompala",
          movement: "Kabloyu baş üstünden aşağı doğru it, triceps uzun başını sık",
          commonMistakes: "Omuz yüklenme yok",
          alternatives: "Dumbbell Overhead Extensions"
        },
        {
          id: "incline-dumbbell-curls",
          name: "Incline Dumbbell Curls",
          sets: "3",
          reps: "10",
          rest: "60-90 sn",
          tempo: "Tam esnet",
          setup: "Incline bank, tam esnet, brachialis hedefle",
          movement: "Dumbbell'ları kontrollü şekilde kaldır, biceps kaslarını sık",
          commonMistakes: "Momentum yok",
          alternatives: "Bench Cable Curls"
        },
        {
          id: "concentration-curls",
          name: "Concentration Curls",
          sets: "3",
          reps: "10",
          rest: "60-90 sn",
          tempo: "Zirveyi sık",
          setup: "Oturarak, dirsek dizde, zirveyi sık",
          movement: "Dumbbell'ı kontrollü şekilde kaldır, zirvede sık",
          commonMistakes: "Dirsek sabit",
          alternatives: "One-Arm Preacher Curls"
        },
        {
          id: "chin-ups",
          name: "Chin-Ups",
          sets: "3",
          reps: "10",
          rest: "60-90 sn",
          tempo: "Kontrollü",
          setup: "Supinated tutuş, göğüse çek",
          movement: "Vücudu yukarı çek, biceps kaslarını sık",
          commonMistakes: "Yardımcı bant eğer zor",
          alternatives: "Reverse Preacher Curls"
        },
        {
          id: "ez-bar-curls-fst7",
          name: "EZ-Bar Curls (FST-7)",
          sets: "7",
          reps: "10",
          rest: "30-45 sn",
          tempo: "Pompala",
          setup: "Ayakta, pompala",
          movement: "EZ-Bar'ı kontrollü şekilde kaldır, biceps pompajını yaşa",
          commonMistakes: "Form bozulmasın",
          alternatives: "Cable Curls"
        }
      ]
    },
    {
      id: "leg-day",
      name: "Cuma",
      title: "Bacak (19-22 set)",
      description: "En etkili: Squats (quad/glute), deadlifts (hamstring) için yüksek hipertrofi",
      exercises: [
        {
          id: "bike-warmup",
          name: "5 min Bike (Isınma)",
          sets: "-",
          reps: "-",
          rest: "-",
          tempo: "Hafif tempo",
          setup: "Hafif tempo",
          movement: "Kalp atışını yükselt",
          commonMistakes: "Kalp atışını yükselt",
          alternatives: "Dinamik esneme"
        },
        {
          id: "seated-leg-extensions",
          name: "Seated Leg Extensions",
          sets: "3",
          reps: "10",
          rest: "60-90 sn",
          tempo: "Tam uzat",
          setup: "Quad'ı sık, tam uzat",
          movement: "Bacakları düzleştir, quad kaslarını sık",
          commonMistakes: "Diz yüklenme yok",
          alternatives: "Sissy Squats"
        },
        {
          id: "barbell-back-squats",
          name: "Barbell Back Squats",
          sets: "3",
          reps: "10",
          rest: "60-90 sn",
          tempo: "Derin in",
          setup: "Derin in, quad ve glute hedefle",
          movement: "Kalçayı aşağı indir, quad ve glute kaslarını sık",
          commonMistakes: "Sırt düz, diz öne çıkmasın",
          alternatives: "Smith Machine Squats"
        },
        {
          id: "bulgarian-split-squats",
          name: "Bulgarian Split Squats",
          sets: "3",
          reps: "10",
          rest: "60-90 sn",
          tempo: "Derin in",
          setup: "Tek taraflı, dengesizliği düzelt",
          movement: "Ön bacağı bük, derin squat yap",
          commonMistakes: "Derin in, sırt dik",
          alternatives: "Hack Squats"
        },
        {
          id: "leg-press-fst7",
          name: "Leg Press (FST-7)",
          sets: "7",
          reps: "10",
          rest: "30-45 sn",
          tempo: "Pompala",
          setup: "Ayak orta, pompala",
          movement: "Bacakları bük ve düzleştir, quad pompajını yaşa",
          commonMistakes: "Diz kilitleme yok",
          alternatives: "Goblet Squats"
        },
        {
          id: "romanian-deadlifts",
          name: "Romanian Deadlifts",
          sets: "3",
          reps: "10",
          rest: "60-90 sn",
          tempo: "Kontrollü",
          setup: "Hafif bükük diz, hamstrings esnet",
          movement: "Kalçayı geriye it, hamstring kaslarını esnet",
          commonMistakes: "Sırt düz, bel yaralanması",
          alternatives: "Stiff-Leg Deadlifts"
        },
        {
          id: "prone-leg-curls",
          name: "Prone Leg Curls",
          sets: "3",
          reps: "10",
          rest: "60-90 sn",
          tempo: "Tam ROM",
          setup: "Yatarak, hamstrings sık",
          movement: "Bacakları bük, hamstring kaslarını sık",
          commonMistakes: "Tam ROM",
          alternatives: "Glute-Ham Raise"
        },
        {
          id: "seated-leg-curls-fst7",
          name: "Seated Leg Curls (FST-7)",
          sets: "7",
          reps: "10",
          rest: "30-45 sn",
          tempo: "Pompala",
          setup: "Oturarak, pompala",
          movement: "Bacakları bük, hamstring pompajını yaşa",
          commonMistakes: "Hafif kilo",
          alternatives: "Nordic Hamstring Curls"
        }
      ]
    }
  ],
  notes: {
    rir: "Normal setlerde 1-2, FST-7 setlerinde 0-1",
    progression: "Her hafta ağırlık veya tekrar artır",
    fst7: "FST-7 setlerinde 30-45 sn dinlenme, pompaj hissini yaşa",
    restBetween: "Normal setlerde 60-90 sn, FST-7 setlerinde 30-45 sn",
    additional: "Isınma: Her seansta 5-10 dk hafif kardiyo + hareket için 1-2 hafif set. Beslenme: Protein 1.6-2.2 g/kg, kalori surplus, 7-9 saat uyku. Dikkat: Form öncelikli, ağrı olursa dur, overtraining'e dikkat."
  }
};