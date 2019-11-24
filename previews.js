(function() {
  const mealData = {
    meals: {
      "brokułowa z kaszą jaglaną": [
        {
          fullImage: "images/IMG_4492.JPG",
          thumb: "images/IMG_4492_thumb.JPG"
        }
      ],
      "butter chicken, kasza perłowa z pietruszką, surówka szwedzka": [
        {
          fullImage: "images/IMG_3658.jpg",
          thumb: "images/IMG_3658_thumb.jpg"
        }
      ],
      "devolay z żółtym serem, puree ziemniaczano-marchewkowe, surówka z rzodkwi ze śmietaną": [
        {
          fullImage: "images/IMG_5148.JPG",
          thumb: "images/IMG_5148_thumb.JPG"
        }
      ],
      "falafele z soczewicy i warzyw w sosie serowym, pęczka z pietruszką, surówka szwedzka": [
        {
          fullImage: "images/IMG_4735.JPG",
          thumb: "images/IMG_4735_thumb.JPG"
        }
      ],
      grochówka: [
        {
          fullImage: "images/IMG_1425.JPG",
          thumb: "images/IMG_1425_thumb.JPG"
        }
      ],
      "gulasz z warzywami, kopytka, buraczki": [
        {
          fullImage: "images/IMG_7130.JPG",
          thumb: "images/IMG_7130_thumb.JPG"
        }
      ],
      "kaszotto drobiowe z fasolką i cukinią, surówka z selera z rodzynkami": [
        {
          fullImage: "images/IMG_0871.jpeg",
          thumb: "images/IMG_0871_thumb.jpeg"
        }
      ],
      "kaszotto gryczane z kurczakiem, burakiem i porem": [
        {
          fullImage: "images/IMG-0794.JPG",
          thumb: "images/IMG-0794_thumb.JPG"
        }
      ],
      "klopsiki w sosie pomidorowo-koperkowym, kasza gryczana, buraczki na ciepło": [
        {
          fullImage: "images/IMG_3652.jpg",
          thumb: "images/IMG_3652_thumb.jpg"
        }
      ],
      "kotlet mielony, puree ziemniaczane, marchew z groszkiem": [
        {
          fullImage: "images/IMG_1525.JPG",
          thumb: "images/IMG_1525_thumb.JPG"
        }
      ],
      "kotlet pożarski, ziemniaki z wody z koperkiem, surówka z selera z rodzynkami": [
        {
          fullImage: "images/IMG_6439.JPG",
          thumb: "images/IMG_6439_thumb.JPG"
        }
      ],
      "kotlet mielony, puree ziemniaczane, marchew z jabłkiem": [
        {
          fullImage: "images/IMG_7280.JPG",
          thumb: "images/IMG_7280_thumb.JPG"
        }
      ],
      "kotlet schabowy, puree ziemniaczano-marchewkowe, surówka bałkańska": [
        {
          fullImage: "images/IMG_2927.JPG",
          thumb: "images/IMG_2927_thumb.JPG"
        }
      ],
      "kotlety ziemniaczane w sosie pieczarkowym, jajko na twardo, coleslaw": [
        {
          fullImage: "images/IMG-0793.JPG",
          thumb: "images/IMG-0793_thumb.JPG"
        }
      ],
      "krem koperkowo-porowy z pieczoną dynią": [
        {
          fullImage: "images/IMG_3663.jpg",
          thumb: "images/IMG_3663_thumb.jpg"
        }
      ],
      "krem z buraka z serem feta": [
        {
          fullImage: "images/IMG_3308.JPG",
          thumb: "images/IMG_3308_thumb.JPG"
        }
      ],
      "kurczak tikka masala, ryż z porem, surówka wielowarzywna z kalarepą": [
        {
          fullImage: "images/IMG_3111.JPG",
          thumb: "images/IMG_3111_thumb.JPG"
        }
      ],
      "leczo drobiowe z cukinią, marchewką i pomidorami, kasza jęczmienna, sałata lodowa z selerem naciowym, rodzynkami i śmietaną": [
        {
          fullImage: "images/IMG_9282.JPG",
          thumb: "images/IMG_9282_thumb.JPG"
        }
      ],
      "makaron farfalle w sosie z owoców leśnych": [
        {
          fullImage: "images/IMG_3662.jpg",
          thumb: "images/IMG_3662_thumb.jpg"
        }
      ],
      "makaron penne rigatte z dynią, szpinakiem, suszonymi pomidorami i serem feta": [
        {
          fullImage: "images/IMG_0162.JPG",
          thumb: "images/IMG_0162_thumb.JPG"
        }
      ],
      "marynowane filety z kurczaka zapiekane z pomidorami i żółtym serem, biały ryż, surówka wielowarzywna": [
        {
          fullImage: "images/IMG_0336.JPG",
          thumb: "images/IMG_0336_thumb.JPG"
        }
      ],
      "maślane naleśniki z warzywną caponatą": [
        {
          fullImage: "images/IMG_9904.JPG",
          thumb: "images/IMG_9904_thumb.JPG"
        }
      ],
      "nuggetsy z kurczaka, dip śmietanowo-czosnkowy, ziemniaki opiekane, coleslaw": [
        {
          fullImage: "images/IMG_5121.JPG",
          thumb: "images/IMG_5121_thumb.JPG"
        }
      ],
      "pierogi leniwe z bułką tartą, surówka z marchwi z ananasem": [
        {
          fullImage: "images/IMG_2719.JPG",
          thumb: "images/IMG_2719_thumb.JPG"
        }
      ],
      "pierogi ruskie z cebulką, świeża marchew": [
        {
          fullImage: "images/IMG_0703_thumb.JPG",
          thumb: "images/IMG_0703_thumb.JPG"
        }
      ],
      "roladki z kurczaka z nadzieniem serowo - jajecznym, ziemniaki z wody, marchew z jabłkiem": [
        {
          fullImage: "images/IMG_1742.JPG",
          thumb: "images/IMG_1742_thumb.JPG"
        }
      ],
      "spaghetti z klopsikami rybnymi w sosie pomidorowym z cukinią": [
        {
          fullImage: "images/IMG_9942.JPG",
          thumb: "images/IMG_9942_thumb.JPG"
        }
      ],
      "wegański mielony z dynią i warzywami w sosie śmietankowym, kasza jaglana z pietruszką, marchew z jabłkiem": [
        {
          fullImage: "images/IMG_5349.JPG",
          thumb: "images/IMG_5349_thumb.JPG"
        }
      ],
      "wegetariańskie kotlety z fasoli w sosie warzywnym, kasza kuskus, buraki na ciepło": [
        {
          fullImage: "images/IMG_2758.JPG",
          thumb: "images/IMG_2758_thumb.JPG"
        }
      ],
      wielowarzywna: [
        {
          fullImage: "images/IMG_3037.JPG",
          thumb: "images/IMG_3037_thumb.JPG"
        }
      ],
      "zapiekanka makaronowa z warzywami w sosie beszamelowym": [
        {
          fullImage: "images/7fa1055cfe2fb7b4f40885bc2c176fc3e1869c7e.jpg",
          thumb: "images/7fa1055cfe2fb7b4f40885bc2c176fc3e1869c7e_thumb.jpg"
        }
      ],
      "zapiekanka rybna ze szpinakiem i serem": [
        {
          fullImage: "images/IMG_3664.jpg",
          thumb: "images/IMG_3664_thumb.jpg"
        }
      ],
      "zapiekany ryż z jabłkami, cynamonem i śmietaną": [
        {
          fullImage: "images/IMG_3706.JPG",
          thumb: "images/IMG_3706_thumb.JPG"
        }
      ],
      "zielone falafele w sosie pomidorowym, kasza jęczmienna, marchew karmelizowana": [
        {
          fullImage: "images/IMG_8828.JPG",
          thumb: "images/IMG_8828_thumb.JPG"
        }
      ],
      żurek: [
        {
          fullImage: "images/IMG_3656.jpg",
          thumb: "images/IMG_3656_thumb.jpg"
        }
      ]
    }
  };

  window.mealData = mealData;
})();
