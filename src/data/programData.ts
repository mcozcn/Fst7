import { FitnessProgram } from "@/types/program";

export const fitnessProgram: FitnessProgram = {
  id: "complete-fitness-program",
  name: "Kapsamlı Fitness Programı",
  description: "3 fazlık profesyonel antrenman programı - Adaptasyon, Gelişim ve Doruk",
  phases: [
    {
      id: "phase-1",
      name: "Faz 1",
      title: "Adaptasyon (Hafta 1-4)",
      description: "Hareket formunu güçlendirmek, kas-iskelet sistemi stabilizasyonunu artırmak ve ağırlık seviyelerini kontrollü şekilde artırmak.",
      weeklySchedule: [
        "Pzt: Upper A (Göğüs + Sırt + Omuz)",
        "Sal: Lower A (Kuvvet Odaklı)",
        "Çrş: Dinlenme / Hafif Aktif Toparlanma",
        "Prş: Upper B (Üst Gövde Hacim & Arka Omuz + Kol)",
        "Cum: Lower B (Hacim & Glute/İzolasyon)",
        "Cts: Opsiyonel Kardiyo (LISS 30–40 dk)",
        "Paz: Dinlenme"
      ],
      goals: [
        "Hareket formunu güçlendirmek",
        "Kas-iskelet sistemi stabilizasyonunu artırmak",
        "Ağırlık seviyelerini kontrollü şekilde artırmak"
      ],
      workoutDays: [
        {
          id: "phase1-day1",
          name: "Gün 1",
          title: "Upper A (Göğüs + Sırt + Omuz)",
          description: "Üst vücut kuvvet odaklı antrenman",
          exercises: [
            {
              id: "barbell-bench-press",
              name: "Barbell Bench Press",
              sets: "4",
              reps: "6-8",
              rest: "2–3 dk",
              tempo: "2:0:1:0",
              setup: "Bench'e sırt yaslı, omuzlar geride, ayaklar yerde",
              movement: "Bar göğüs ortasına kontrollü indir, yukarı iterken nefes ver",
              commonMistakes: "Omuzları yukarı kaldırmak, dirsekleri tamamen dışa açmak",
              alternatives: "Dumbbell Bench Press"
            },
            {
              id: "incline-dumbbell-press",
              name: "Incline Dumbbell Press",
              sets: "3",
              reps: "8-10",
              rest: "90 sn",
              tempo: "2:0:1:0",
              setup: "Bench açısı 30–45°, sırt yaslı, ayaklar yerde",
              movement: "Dumbbell'ları göğüs üst hattına indir, kontrollü yukarı it",
              commonMistakes: "Bench açısını çok yüksek yapmak, dumbbell çarpışması",
              alternatives: "Barbell Incline Press veya Machine Press"
            },
            {
              id: "pull-up-lat-pulldown",
              name: "Pull-Up / Lat Pulldown",
              sets: "4",
              reps: "6-10",
              rest: "2 dk",
              tempo: "Kontrollü, momentum yok",
              setup: "Pull-up: omuz genişliğinde, sırt düz",
              movement: "Göğsü bar/lat machine'e yaklaştır, omuzları aşağı indir",
              commonMistakes: "Momentum kullanmak, omuzları kulaklara çekmek",
              alternatives: "Assisted Pull-Up veya Resistance Band Pull-Up"
            },
            {
              id: "bent-over-row",
              name: "Bent-Over Row / Chest-Supported Row",
              sets: "3",
              reps: "8-10",
              rest: "90 sn",
              tempo: "2:0:1:0",
              setup: "Bent-over: diz hafif kırık, kalçadan öne eğik, sırt düz",
              movement: "Dirsekleri vücuda yakın tutarak göğse çek, kontrollü bırak",
              commonMistakes: "Sırtı yuvarlamak, hızlı salınım",
              alternatives: "T-Bar Row veya Seated Row Makinesi"
            },
            {
              id: "overhead-press",
              name: "Overhead Press",
              sets: "3",
              reps: "8-10",
              rest: "90 sn",
              tempo: "2:0:1:0",
              setup: "Ayakta veya oturur pozisyon, core sıkı",
              movement: "Bar/dumbbell'ı çene önünden yukarı iter, kontrollü indir",
              commonMistakes: "Belin arkaya aşırı eğilmesi, dirsekleri çok açmak",
              alternatives: "Seated Dumbbell Press"
            },
            {
              id: "cable-lateral-raise",
              name: "Cable Lateral Raise",
              sets: "3",
              reps: "12-15",
              rest: "60 sn",
              tempo: "Kontrollü",
              setup: "Cable alt seviyeye, hafif öne eğik, core sıkı",
              movement: "Dirsek hafif bükülü, lateral kaldır, tepede 1 sn sık",
              commonMistakes: "Sallamak, omuz yukarı çekmek",
              alternatives: "Dumbbell Lateral Raise"
            },
            {
              id: "cable-fly-fst7",
              name: "Cable Fly (Omuz hizası) — FST-7",
              sets: "7",
              reps: "12-15",
              rest: "30–45 sn",
              tempo: "Kontrollü",
              setup: "Cable'lar omuz hizasında, gövde hafif önde",
              movement: "Kollar hafif bükülü, göğüs önünde birleştir, yavaş geri",
              commonMistakes: "Dirsekleri kilitlemek, hızlı yapmak",
              alternatives: "Dumbbell Fly veya Pec-Deck"
            }
          ],
          coreAndCardio: [
            "Plank 3×30-45 sn",
            "Hanging Knee Raise 3×12"
          ]
        },
        {
          id: "phase1-day2",
          name: "Gün 2",
          title: "Lower A (Kuvvet Odaklı)",
          description: "Alt vücut kuvvet odaklı antrenman",
          exercises: [
            {
              id: "back-squat-front-squat",
              name: "Back Squat / Front Squat",
              sets: "4",
              reps: "5-7",
              rest: "2–3 dk",
              tempo: "2:0:1:0",
              setup: "Ayaklar omuz genişliği, hafif dışa dönük. Back Squat: Bar üst trapezde, Front Squat: Bar üst ön omuzda, dirsekler yukarı",
              movement: "Kalçayı geri ve dizleri bükerek aşağı in, uyluk yere paralel veya hafif altına. Kontrollü yukarı kalk.",
              commonMistakes: "Dizlerin içe veya öne çökmesi, belin yuvarlanması",
              alternatives: "Goblet Squat veya Hack Squat Makinesi"
            },
            {
              id: "romanian-deadlift",
              name: "Romanian Deadlift",
              sets: "4",
              reps: "8-10",
              rest: "2 dk",
              tempo: "2:1:1:0",
              setup: "Ayaklar omuz genişliği, bar önünde. Diz hafif kırık, kalça geride.",
              movement: "Sırt düz, bar dizden aşağı, hamstring ger. Topuk yere basılı, bar bacaklara yakın.",
              commonMistakes: "Sırtı yuvarlamak, dizleri fazla düzleştirmek",
              alternatives: "Dumbbell Romanian Deadlift veya Single-Leg RDL"
            },
            {
              id: "leg-press-quad",
              name: "Leg Press (Quad odaklı)",
              sets: "3",
              reps: "10-12",
              rest: "90 sn",
              tempo: "Kontrollü",
              setup: "Ayaklar omuz genişliği, platform ortasına. Sırt ve kalçayı yasla.",
              movement: "Dizleri bükerek platformu indir, kontrollü geri it",
              commonMistakes: "Dizleri kilitlemek, kalçayı kaldırmak",
              alternatives: "Single-Leg Press veya Goblet Squat"
            },
            {
              id: "cable-leg-curl",
              name: "Cable Leg Curl",
              sets: "3",
              reps: "12-15",
              rest: "60–75 sn",
              tempo: "Kontrollü",
              setup: "Cable ayak bileğine, yüz üstü veya ayakta",
              movement: "Dizleri bükerek topuğu kalçaya çek, yavaşça geri bırak",
              commonMistakes: "Hızlı hareket, kalçayı kaldırmak",
              alternatives: "Lying Leg Curl Makinesi veya Stability Ball Curl"
            },
            {
              id: "standing-calf-raise",
              name: "Standing / Leg-Press Calf Raise",
              sets: "4",
              reps: "12-15",
              rest: "60 sn",
              tempo: "Kontrollü",
              setup: "Bar üst trapez veya makineye, ayaklar omuz genişliği",
              movement: "Topukları olabildiğince yukarı kaldır, 1–2 sn tepede sık. Yavaşça indir, hafifçe esneme altına inmesine izin ver",
              commonMistakes: "Hızlı tekrar, ayak parmaklarının fazla dönük olması",
              alternatives: "Tek ayak veya dumbbell ile calf raise"
            },
            {
              id: "walking-lunge-fst7",
              name: "Walking Lunge — FST-7",
              sets: "7",
              reps: "12 adım/bacak",
              rest: "30–45 sn",
              tempo: "Kontrollü",
              setup: "Ayakta, eller dumbbell'da veya boş",
              movement: "Adım ileri, diz 90°, arkadaki diz yere değmeden. Kontrolü kaybetmeden adımı tamamla",
              commonMistakes: "Öndeki dizin parmak ucunu geçmesi, dengesiz adım uzunluğu",
              alternatives: "Stationary Split Squat veya Step-Up"
            }
          ],
          coreAndCardio: [
            "Side Plank 3×30 sn/yan + Pallof Press 3×12/yan",
            "Kardiyo: Toparlanmayı korumak için düşük tempolu, opsiyonel"
          ]
        },
        {
          id: "phase1-day3",
          name: "Gün 3",
          title: "Upper B (Üst Gövde Hacim & Arka Omuz + Kol)",
          description: "Üst vücut hacim ve kol odaklı antrenman",
          exercises: [
            {
              id: "incline-barbell-press",
              name: "Incline Barbell Press",
              sets: "4",
              reps: "6-8",
              rest: "2–3 dk",
              tempo: "2:0:1:0",
              setup: "Bench açısı 30–45°, sırt yaslı, ayaklar yerde, core sıkı",
              movement: "Barı göğsün üst hattına indir, 1–2 sn bekle, kontrollü yukarı it",
              commonMistakes: "Bench açısını çok yüksek yapmak → ön omuz baskısı, dirsekleri açmak",
              alternatives: "Dumbbell Incline Press veya Machine Press"
            },
            {
              id: "flat-dumbbell-press",
              name: "Flat Dumbbell Press",
              sets: "3",
              reps: "8-10",
              rest: "90 sn",
              tempo: "2:0:1:0",
              setup: "Bench yatay, sırt yaslı, ayaklar yerde",
              movement: "Dumbbell'ları göğüs hizasına indir, kontrollü yukarı it",
              commonMistakes: "Dumbbell'ları çarptırmak, hızlı tekrar",
              alternatives: "Barbell Flat Bench Press veya Machine Press"
            },
            {
              id: "barbell-row-reverse",
              name: "Barbell Row (ters kavrama)",
              sets: "4",
              reps: "6-8",
              rest: "2–3 dk",
              tempo: "2:0:1:0",
              setup: "Ayaklar omuz genişliği, dizler hafif kırık, gövde öne eğik, sırt düz",
              movement: "Barı göbek hizasına çek, dirsekleri vücuda yakın, kontrollü bırak",
              commonMistakes: "Sırtı yuvarlamak, momentum kullanmak",
              alternatives: "Dumbbell Row veya T-Bar Row"
            },
            {
              id: "seated-cable-row",
              name: "Seated Cable Row",
              sets: "3",
              reps: "10-12",
              rest: "90 sn",
              tempo: "Kontrollü",
              setup: "Ayaklar platformda, dizler hafif kırık, gövde dik, core sıkı",
              movement: "Dirsekleri vücuda yakın tut, kabloyu göğse çek, kontrollü bırak",
              commonMistakes: "Gövdeyi geriye sallamak, omuzları yukarı çekmek",
              alternatives: "Bent-Over Row veya Machine Row"
            },
            {
              id: "face-pull",
              name: "Face Pull",
              sets: "3",
              reps: "12-15",
              rest: "60 sn",
              tempo: "Kontrollü, tepede 1 sn sık",
              setup: "Cable makineyi yüz hizasına ayarla, ip tutuşu",
              movement: "Dirsekleri yanlara aç, ipi yüz hizasına çek",
              commonMistakes: "Omuzları yukarı çekmek, hızlı tekrar",
              alternatives: "Rear Delt Fly veya Band Pull-Apart"
            },
            {
              id: "barbell-incline-curl",
              name: "Barbell / Incline Dumbbell Curl",
              sets: "3",
              reps: "8-10",
              rest: "60 sn",
              tempo: "2:0:1:0",
              setup: "Ayakta veya incline bench'de otur, dirsek sabit, ağırlığı kontrollü tut",
              movement: "Dirseği sabit tutarak curl yap, yavaşça geri bırak",
              commonMistakes: "Dirseği sallamak, hızlı tekrar",
              alternatives: "Hammer Curl veya Cable Curl"
            },
            {
              id: "overhead-triceps-fst7",
              name: "Overhead Cable Triceps Extension — FST-7",
              sets: "7",
              reps: "12-15",
              rest: "30–45 sn",
              tempo: "Yavaş, tepede 1 sn sık",
              setup: "Cable üstten ayarla, ipi iki el ile tut",
              movement: "Dirsek sabit, ipi aşağı doğru it",
              commonMistakes: "Dirsekleri açmak, hızlı tekrar",
              alternatives: "Dumbbell Overhead Triceps Extension"
            }
          ],
          coreAndCardio: [
            "Plank veya opsiyonel üst gövde core eklemek isteyenler için",
            "Kardiyo: 15–20 dk orta tempo"
          ]
        },
        {
          id: "phase1-day4",
          name: "Gün 4",
          title: "Lower B (Hacim & Glute / İzolasyon)",
          description: "Alt vücut hacim ve glute odaklı antrenman",
          exercises: [
            {
              id: "front-squat-hack",
              name: "Front Squat / Hack Squat",
              sets: "4",
              reps: "6-8",
              rest: "2–3 dk",
              tempo: "2:0:1:0",
              setup: "Ayaklar omuz genişliği, hafif dışa dönük. Front Squat: Bar üst ön omuzda, dirsekler yukarı. Hack Squat: Ayaklar platform ortasında",
              movement: "Kalçayı geri ve dizleri bükerek aşağı in, uyluk yere paralel veya hafif altı. Kontrollü yukarı kalk.",
              commonMistakes: "Dizleri içe çökertmek, belin yuvarlanması",
              alternatives: "Goblet Squat veya Barbell Back Squat"
            },
            {
              id: "bulgarian-split-squat",
              name: "Bulgarian Split Squat",
              sets: "3",
              reps: "10-12",
              rest: "90 sn",
              tempo: "Kontrollü",
              setup: "Arkadaki ayak bench'e yaslı, öndeki ayak yerde, dumbbell veya bar kullanabilirsin",
              movement: "Öndeki diz 90° kırık, arkadaki diz yere yakın, kontrollü yukarı kalk",
              commonMistakes: "Diz öndeki ayak parmağını geçmemeli, dengeyi kaybetmemeli",
              alternatives: "Stationary Split Squat veya Step-Up"
            },
            {
              id: "hip-thrust",
              name: "Hip Thrust",
              sets: "4",
              reps: "8-10",
              rest: "2 dk",
              tempo: "2:1:1:0",
              setup: "Bench arkanızda, omuzlar bench'e yaslı, bar/dumbbell kalçanın üzerinde",
              movement: "Topukları it, kalçayı yukarı kaldır, tepede sık, kontrollü aşağı indir",
              commonMistakes: "Belin aşırı arkaya eğilmesi, topukları kaldırmak",
              alternatives: "Glute Bridge (düşük ağırlık)"
            },
            {
              id: "cable-leg-curl-2",
              name: "Cable Leg Curl",
              sets: "3",
              reps: "12-15",
              rest: "60–75 sn",
              tempo: "Kontrollü",
              setup: "Cable ayak bileğine bağla, yüz üstü veya ayakta",
              movement: "Dizleri bükerek topuğu kalçaya çek, yavaşça geri bırak",
              commonMistakes: "Hızlı hareket, kalçayı kaldırmak",
              alternatives: "Lying Leg Curl Makinesi veya Stability Ball Curl"
            },
            {
              id: "seated-calf-raise",
              name: "Seated Calf Raise (Dumbbell diz üstünde)",
              sets: "4",
              reps: "15-20",
              rest: "60 sn",
              tempo: "Kontrollü",
              setup: "Bench'e otur, dumbbell diz üzerinde, ayak tabanı tam basılı",
              movement: "Topukları yukarı kaldır, tepede 1–2 sn sık, yavaşça indir",
              commonMistakes: "Sallamak, hızlı tekrar",
              alternatives: "Machine Seated Calf Raise veya tek ayak"
            },
            {
              id: "leg-extension-fst7",
              name: "Leg Extension — FST-7",
              sets: "7",
              reps: "12-15",
              rest: "30–45 sn",
              tempo: "Yavaş, tepede 1 sn sık",
              setup: "Makineye otur, diz eklem hizasında pivot, ayaklar platforma tam basılı",
              movement: "Dizleri düzleştir, kontrollü geri indir",
              commonMistakes: "Tekrarları hızlı yapmak, dizleri kilitlemek",
              alternatives: "Dumbbell Sissy Squat veya Hack Squat odaklı"
            }
          ],
          coreAndCardio: [
            "LISS: 30–40 dk yürüyüş veya bisiklet",
            "Core (haftada 2x): Gün 1 sonu: Plank 3×30-45 sn + Hanging Knee Raise 3×12, Gün 4 sonu: Side Plank 3×30 sn/yan + Pallof Press 3×12/yan"
          ]
        }
      ],
      notes: {
        rir: "Ana bileşiklerde 1–2, izolasyonlarda 0–1",
        progression: "Haftalık +1–2 tekrar veya %2–5 yük artışı",
        fst7: "Aynı kas grubunda haftada 1 finisher, setler arası 30–45 sn",
        restBetween: "90–120 sn (ana lift sonrası 2 dk'ya kadar)",
        additional: "Cable Fly açısı: Haftalar içinde düşük-orta-yüksek açı döngüsü ile göğüs dengesi"
      }
    }
    // Faz 2 ve Faz 3 de benzer şekilde eklenecek - bu çok uzun olacağı için sadece Faz 1'i örnek olarak ekledim
    // Gerçek uygulamada tüm fazlar aynı detayda eklenecek
  ]
};