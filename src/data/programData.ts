import { FitnessProgram } from "@/types/program";

export const splitProgram: FitnessProgram = {
  id: "split-program",
  name: "3 Günlük Split Antrenman Programı",
  description: "Kas Hipertrofisi için Optimize Edilmiş Split Antrenman - Push-Pull-Legs (PPL) FST-7 ile",
  weeklySchedule: [
    "Gün 1: Push (Göğüs, Triceps)",
    "Gün 2: Dinlenme",
    "Gün 3: Pull (Sırt, Biceps)",
    "Gün 4: Dinlenme",
    "Gün 5: Legs + Shoulders (Bacaklar ve Omuzlar)",
    "Gün 6: Dinlenme",
    "Gün 7: Dinlenme"
  ],
  goals: [
    "Maksimum kas hipertrofisi",
    "Push-Pull-Legs split ile optimal toparlanma",
    "FST-7 teknikleri ile metabolik stres",
    "Fasya esnetme ve kas dolgunluğu",
    "Haftalık 20-30 set/kas grubu"
  ],
  workoutDays: [
    {
      id: "push-day",
      name: "Gün 1",
      title: "Push (Göğüs, Triceps)",
      description: "Göğüs ve triceps, itme hareketlerinde sinerjik çalışır. PPL splitinde standarttır ve hipertrofi için etkilidir.",
      exercises: [
        {
          id: "incline-hammer-press",
          name: "Incline Hammer Strength Press",
          sets: "4",
          reps: "8-12",
          rest: "90-120 sn",
          tempo: "Kontrollü",
          setup: "Makinede 30-45° açı, göğüs üst kısmını hedefle",
          movement: "Göğüs üst kısmına odaklanarak kontrollü it",
          commonMistakes: "Omuz öne çıkmamalı, tam ROM kullan",
          alternatives: "Incline Barbell/Dumbbell Press"
        },
        {
          id: "dumbbell-incline-press",
          name: "Dumbbell Incline Chest Press",
          sets: "3",
          reps: "8-12",
          rest: "90 sn",
          tempo: "Kontrollü",
          setup: "30° incline bank, dumbbellları göğüs hizasına indir",
          movement: "Göğüs üst kısmını sıkarak yukarı it, stabilizatör kasları çalıştır",
          commonMistakes: "Dumbbelllar çok aşağı inmesin, bel kavisli olmasın",
          alternatives: "Incline Smith Machine Press"
        },
        {
          id: "flat-dumbbell-press",
          name: "Flat Bench Dumbbell Press",
          sets: "3",
          reps: "8-12",
          rest: "90 sn",
          tempo: "Kontrollü",
          setup: "Düz bank, dumbbellları göğüs ortasına indir",
          movement: "Göğüs orta kısmını sıkarak yukarı it",
          commonMistakes: "Dirsekler 45°, sırtı kaldırma",
          alternatives: "Flat Barbell Press"
        },
        {
          id: "cable-flyes-3-angle",
          name: "Cable Flyes (3 Açı)",
          sets: "3",
          reps: "8-12",
          rest: "60 sn",
          tempo: "Son tekrarda tepe sıkma",
          setup: "Üst 5, alt 5, orta 5 tekrar - son tekrarda tepe noktada sık",
          movement: "Göğüs iç kısmına odaklanarak kolları birleştir",
          commonMistakes: "Omuz yüklenmesin, hafif kilo kullan",
          alternatives: "Dumbbell Flyes"
        },
        {
          id: "smith-incline-fst7",
          name: "Smith Incline Press (FST-7)",
          sets: "7",
          reps: "8-12",
          rest: "30-45 sn",
          tempo: "Pompalama odaklı",
          setup: "Smith makinesinde 30° açı, hafif kilo",
          movement: "Hızlı tempoda pompala, metabolik stres yarat",
          commonMistakes: "Form bozulmasın, hafif kilo tercih et",
          alternatives: "Cable Press"
        },
        {
          id: "cable-pushdowns",
          name: "Cable Pushdowns",
          sets: "3",
          reps: "10",
          rest: "60 sn",
          tempo: "Kontrollü",
          setup: "Yüksek kablo, rope attachment, dirsek sabit",
          movement: "Triceps lateral başını sıkarak aşağı it",
          commonMistakes: "Dirsek öne çıkmasın, vücut sabit",
          alternatives: "Straight Bar Pushdowns"
        },
        {
          id: "close-grip-bench",
          name: "Close-Grip Bench Press",
          sets: "3",
          reps: "10",
          rest: "90 sn",
          tempo: "Kontrollü",
          setup: "Dar tutuş (omuz genişliği), göğüse indir",
          movement: "Triceps ile yukarı it, göğüs ikincil",
          commonMistakes: "Bel kavisli olmasın",
          alternatives: "Close-Grip Smith Press"
        },
        {
          id: "skull-crusher",
          name: "Skull Crusher",
          sets: "3",
          reps: "10",
          rest: "60 sn",
          tempo: "Yavaş negatif",
          setup: "EZ bar, alın üstüne kontrollü indir",
          movement: "Triceps uzun başını hedefle",
          commonMistakes: "Dirsek sabit kal",
          alternatives: "Dumbbell Skull Crusher"
        },
        {
          id: "triceps-extension-fst7",
          name: "Triceps Extension Seated (FST-7)",
          sets: "7",
          reps: "10",
          rest: "30 sn",
          tempo: "Pompalama",
          setup: "Oturarak, tek dumbbell iki elle, baş arkasına indir",
          movement: "Triceps uzun başını pompala, hafif kilo",
          commonMistakes: "Omuz yüklenmesin, form koru",
          alternatives: "Cable Overhead Extension"
        }
      ]
    },
    {
      id: "pull-day",
      name: "Gün 3",
      title: "Pull (Sırt, Biceps)",
      description: "Sırt ve biceps, çekme hareketlerinde sinerjik çalışır. V-taper estetiği ve biceps kütlesi için optimize edilmiş.",
      exercises: [
        {
          id: "lat-pulldown-wide",
          name: "Lat Pulldown Wide Grip",
          sets: "4",
          reps: "10-12",
          rest: "90-120 sn",
          tempo: "Kontrollü",
          setup: "Geniş tutuş, göğse çek, lat genişliği için",
          movement: "Latissimus dorsi'yi sıkarak göğse çek",
          commonMistakes: "Momentum kullanma, tam ROM",
          alternatives: "Wide-Grip Pull-Ups"
        },
        {
          id: "low-cable-row-wide",
          name: "Low Cable Row Wide Grip",
          sets: "3",
          reps: "10-12",
          rest: "90 sn",
          tempo: "Kontrollü",
          setup: "Geniş tutuş, göğse çek, orta sırt kalınlığı",
          movement: "Kürek kemiklerini birleştir, sırt ortasını sık",
          commonMistakes: "Göğüs öne çıkmasın, momentum yok",
          alternatives: "Seated Machine Row"
        },
        {
          id: "t-bar-row-wide",
          name: "T-Bar Row Wide Grip",
          sets: "3",
          reps: "10-12",
          rest: "90 sn",
          tempo: "Kontrollü",
          setup: "Geniş tutuş, göğse çek, sırt kütlesi için",
          movement: "Sırt kalınlığını artırmak için güçlü çek",
          commonMistakes: "Sırt düz, bel yüklenme yok",
          alternatives: "Bent-Over Barbell Row"
        },
        {
          id: "unilateral-iso-row",
          name: "Unilateral Iso Row",
          sets: "3",
          reps: "10-12",
          rest: "60 sn",
          tempo: "Kontrollü",
          setup: "Tek kollu makine row, kas imbalansı düzelt",
          movement: "Her tarafı eşit çalıştır, sırt gelişimi dengele",
          commonMistakes: "Her taraf eşit set/tekrar",
          alternatives: "One-Arm Dumbbell Row"
        },
        {
          id: "seated-high-rope-row",
          name: "Seated High Rope Pulley Rows",
          sets: "5",
          reps: "10-12",
          rest: "45 sn",
          tempo: "Tepe sıkma",
          setup: "Yüksek kablo, göğüs altına çek, tepe noktada sık",
          movement: "Sırt üstü detayı için kasılmayı artır",
          commonMistakes: "Momentum kullanma, 2 sn sık",
          alternatives: "Face Pulls"
        },
        {
          id: "dumbbell-curls",
          name: "Dumbbell Curls",
          sets: "3",
          reps: "10",
          rest: "60 sn",
          tempo: "Kontrollü",
          setup: "Ayakta, alternatif veya beraber, biceps kütlesi",
          movement: "Biceps'i sıkarak yukarı kaldır",
          commonMistakes: "Dirsek sabit, momentum yok",
          alternatives: "Barbell Curls"
        },
        {
          id: "one-arm-preacher",
          name: "One Arm Preacher Curl",
          sets: "3",
          reps: "10",
          rest: "60 sn",
          tempo: "Tepe sıkma",
          setup: "Preacher bench, tek kol, biceps tepe izolasyonu",
          movement: "Tepe noktada biceps'i maksimum sık",
          commonMistakes: "Her taraf eşit, dirsek destekli",
          alternatives: "Machine Preacher Curl"
        },
        {
          id: "spider-curl",
          name: "Spider Curl",
          sets: "3",
          reps: "10",
          rest: "60 sn",
          tempo: "Kontrollü",
          setup: "Incline bench ters, göğüs dayalı, biceps uzun baş",
          movement: "Biceps uzun başını izole et",
          commonMistakes: "Tam ROM kullan",
          alternatives: "Incline Dumbbell Curl"
        },
        {
          id: "barbell-curls-fst7",
          name: "Barbell Curls (FST-7)",
          sets: "7",
          reps: "10",
          rest: "30 sn",
          tempo: "Pompalama",
          setup: "EZ bar veya straight bar, hafif kilo",
          movement: "Biceps'i pompala, metabolik stres",
          commonMistakes: "Form bozulmasın, hafif kilo",
          alternatives: "Cable Curls"
        }
      ]
    },
    {
      id: "legs-shoulders-day",
      name: "Gün 5",
      title: "Legs + Shoulders (Bacaklar ve Omuzlar)",
      description: "Bacaklar ve omuzlar birlikte - büyük kas grubu ve üst vücut dengesi için optimize edilmiş program.",
      exercises: [
        {
          id: "bike-warmup-split",
          name: "5 dk Bike (Isınma)",
          sets: "-",
          reps: "-",
          rest: "-",
          tempo: "Hafif tempo",
          setup: "Hafif tempoda bisiklet",
          movement: "Kan akışını artır, yaralanma riskini azalt",
          commonMistakes: "Çok yoğun yapma",
          alternatives: "Dinamik esneme"
        },
        {
          id: "leg-extensions-split",
          name: "Leg Extensions",
          sets: "3",
          reps: "10",
          rest: "90 sn",
          tempo: "Tam uzat",
          setup: "Makinede otur, quad izolasyonu",
          movement: "Quadriceps'i sıkarak bacağı düzleştir",
          commonMistakes: "Diz yüklenme yok, kontrollü hareket",
          alternatives: "Sissy Squats"
        },
        {
          id: "front-squats",
          name: "Front Squats",
          sets: "3",
          reps: "10",
          rest: "120 sn",
          tempo: "Derin in",
          setup: "Barbell ön omuzda, dik duruş",
          movement: "Quadriceps odaklı derin squat",
          commonMistakes: "Sırt dik kal, diz öne çıkmasın aşırı",
          alternatives: "Goblet Squats"
        },
        {
          id: "hack-squat",
          name: "Hack Squat",
          sets: "3",
          reps: "10",
          rest: "90 sn",
          tempo: "Kontrollü",
          setup: "Hack squat makinesinde, quadriceps odaklı",
          movement: "Quadriceps kütlesi için kontrollü hareket",
          commonMistakes: "Diz kilitleme yok, tam ROM",
          alternatives: "Smith Machine Squat"
        },
        {
          id: "leg-press-fst7-split",
          name: "Leg Press (FST-7)",
          sets: "7",
          reps: "10",
          rest: "45 sn",
          tempo: "Pompalama",
          setup: "Ayak orta pozisyon, hafif kilo",
          movement: "Genel bacak kütlesi için pompala",
          commonMistakes: "Diz kilitleme yok, form koru",
          alternatives: "Bulgarian Split Squats"
        },
        {
          id: "single-leg-curls",
          name: "Single Leg Curls",
          sets: "3",
          reps: "10",
          rest: "60 sn",
          tempo: "Kontrollü",
          setup: "Makinede tek bacak, hamstring izolasyonu",
          movement: "Her bacağı eşit çalıştır, imbalans önle",
          commonMistakes: "Taraf başına eşit set",
          alternatives: "Seated Leg Curl (tek bacak)"
        },
        {
          id: "stiff-leg-deadlift",
          name: "Stiff-Leg Deadlifts",
          sets: "3",
          reps: "10",
          rest: "90 sn",
          tempo: "Kontrollü",
          setup: "Hafif bükük diz, barbell ile hamstring esnetme",
          movement: "Hamstring ve glute'u esnet, arka zincir güçlendir",
          commonMistakes: "Sırt düz kal, bel yaralanması riski",
          alternatives: "Romanian Deadlifts"
        },
        {
          id: "lying-leg-curls-fst7",
          name: "Lying Leg Curls (FST-7)",
          sets: "7",
          reps: "10",
          rest: "30 sn",
          tempo: "Pompalama",
          setup: "Yatarak, hamstring pompası, hafif kilo",
          movement: "Hamstring'i pompala, metabolik stres",
          commonMistakes: "Hafif kilo kullan, form bozulmasın",
          alternatives: "Nordic Hamstring Curls"
        },
        {
          id: "seated-dumbbell-press-split",
          name: "Seated Dumbbell Press",
          sets: "4",
          reps: "10-12",
          rest: "90 sn",
          tempo: "Kontrollü",
          setup: "Oturarak, dumbbellları omuz hizasından yukarı it",
          movement: "Ön ve yan deltoid için temel bileşik hareket",
          commonMistakes: "Sırt nötr, momentum yok",
          alternatives: "Seated Barbell Press"
        },
        {
          id: "standing-side-raises",
          name: "Standing Dumbbell Side Raises",
          sets: "3",
          reps: "10-12",
          rest: "60 sn",
          tempo: "Kontrollü",
          setup: "Ayakta, hafif öne eğil, yan deltoid izolasyonu",
          movement: "Yan deltoid'i sıkarak yanlara kaldır",
          commonMistakes: "Dirsek kilitleme yok, momentum kullanma",
          alternatives: "Cable Lateral Raises"
        },
        {
          id: "behind-back-cable-raises",
          name: "Behind the Back Cable Side Raises",
          sets: "3",
          reps: "10-12",
          rest: "60 sn",
          tempo: "Kontrollü",
          setup: "Düşük kablo, arkadan tutarak yan ve arka deltoid",
          movement: "Yan ve arka deltoid geçişini hedefle",
          commonMistakes: "Hafif kilo, form öncelikli",
          alternatives: "Reverse Pec Deck"
        },
        {
          id: "front-raise-incline",
          name: "Front Raise off Incline Bench",
          sets: "3",
          reps: "10-12",
          rest: "60 sn",
          tempo: "Kontrollü",
          setup: "Incline bench göğüs dayalı, ön deltoid izolasyonu",
          movement: "Ön deltoid'i sıkarak öne kaldır",
          commonMistakes: "Momentum yok, kontrollü hareket",
          alternatives: "Dumbbell Front Raises"
        },
        {
          id: "reverse-pec-deck-fst7",
          name: "Reverse Pec Deck Flyes (FST-7)",
          sets: "7",
          reps: "10-12",
          rest: "30 sn",
          tempo: "Pompalama",
          setup: "Makinede ters otur, arka deltoid pompası",
          movement: "Arka deltoid'i pompala, hafif kilo kullan",
          commonMistakes: "Form bozulmasın, hafif kilo",
          alternatives: "Cable Reverse Flyes"
        }
      ]
    }
  ],
  notes: {
    rir: "Normal setlerde 1-2, FST-7 setlerinde 0-1",
    progression: "Her hafta ağırlık veya tekrar %5-10 artır",
    fst7: "FST-7 setlerinde 30-45 sn dinlenme, hafif kilo, metabolik stres ve fasya esnetme",
    restBetween: "Normal setlerde 60-120 sn, FST-7 setlerinde 30-45 sn",
    additional: "Isınma: 5-10 dk hafif kardiyo. Beslenme: Protein 1.6-2.2 g/kg, kalori surplus, 7-9 saat uyku. Toparlanma: 4-6 haftada deload. Form öncelikli, ağrı durumunda doktora danış."
  }
};

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
    "FST-7 teknikleri ile gelişim",
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
          setup: "30° incline, barı göğüse indir, göğüs hizasından it, tam ROM",
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
          tempo: "metabolik stresi tetikle",
          setup: "Orta kablo, göğüsü sık",
          movement: "Kolları göğüs önünde birleştir, metabolik stresi tetikle",
          commonMistakes: "metabolik stresi tetikle",
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
          tempo: "metabolik stresi tetikle",
          setup: "Oturarak, boyun arkasına indir, ",
          movement: "Barı boyun arkasından yukarı doğru it, metabolik stresi tetikle",
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
          setup: "Düz kol, lat'leri esnet, metabolik stresi tetikle",
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
          setup: "Overhead, tam esnet, uzun baş için  metabolik stresi tetikle",
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
          tempo: "metabolik stresi tetikle",
          setup: "Ayakta, metabolik stresi tetikle",
          movement: "EZ-Bar'ı kontrollü şekilde kaldır, biceps metabolik stresi tetikle",
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
          tempo: "metabolik stresi tetikle",
          setup: "Ayak orta, metabolik stresi tetikle",
          movement: "Bacakları bük ve düzleştir, quad metabolik stresi tetikle",
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
          tempo: "metabolik stresi tetikle",
          setup: "Oturarak, metabolik stresi tetikle",
          movement: "Bacakları bük, hamstring metabolik stresi tetikle",
          commonMistakes: "Hafif kilo",
          alternatives: "Nordic Hamstring Curls"
        }
      ]
    }
  ],
  notes: {
    rir: "Normal setlerde 1-2, FST-7 setlerinde 0-1",
    progression: "Her hafta ağırlık veya tekrar artır",
    fst7: "FST-7 setlerinde 30-45 sn dinlenme,metabolik stresi tetikle",
    restBetween: "Normal setlerde 60-90 sn, FST-7 setlerinde 30-45 sn",
    additional: "Isınma: Her seansta 5-10 dk hafif kardiyo + hareket için 1-2 hafif set. Beslenme: Protein 1.6-2.2 g/kg, kalori surplus, 7-9 saat uyku. Dikkat: Form öncelikli, ağrı olursa dur, overtraining'e dikkat."
  }
};
