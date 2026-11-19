// Transcription des quatre cartes transmises par le restaurant (novembre 2026).
// Vérifier régulièrement prix et disponibilités avant toute publication définitive.
export type Dish = {
  name: string;
  description?: string;
  priceEuros?: number;
  priceLabel?: string;
  variants?: readonly { label: string; priceEuros: number }[];
  allergens?: readonly string[];
};
export type MenuCategory = { name: string; dishes: readonly Dish[] };
export const menu: readonly MenuCategory[] = [
  {
    "name": "Entrées",
    "dishes": [
      {
        "name": "Velouté de potimarron",
        "priceEuros": 11.5
      },
      {
        "name": "Pâté en croûte Richelieu",
        "priceEuros": 9,
        "description": "Mousse de foie, aux pistaches et aux amandes"
      },
      {
        "name": "La Biquette fondue",
        "priceEuros": 10,
        "description": "Picodon AOP, miel, petite salade, pain grillé"
      }
    ]
  },
  {
    "name": "À partager",
    "dishes": [
      {
        "name": "Planche des copains",
        "priceEuros": 14.5,
        "description": "Jambon cru, saucisson de Vallabrègues, pâté en croûte Richelieu, cornichons, beurre"
      },
      {
        "name": "La Grande Lulu",
        "priceEuros": 25,
        "description": "Jambon cru, saucisson de Vallabrègues, Picodon AOP grillé, Comté 18 mois, tapenade & pain grillé"
      }
    ]
  },
  {
    "name": "Les plats",
    "dishes": [
      {
        "name": "Plat du jour",
        "description": "Sauf le dimanche et les jours fériés",
        "priceLabel": "Demandez-nous"
      },
      {
        "name": "La Daube",
        "priceEuros": 18.5,
        "description": "Daube de bœuf en pain pinsa, Comté gratiné, potimarron rôti, jus de daube réduit"
      },
      {
        "name": "Blanquette végétarienne",
        "priceEuros": 16.5,
        "description": "Cocotte de légumes d’hiver, haricots blancs, champignons, sauce crémeuse & riz pilaf"
      },
      {
        "name": "Brandade de morue parmentière",
        "priceEuros": 18.5,
        "description": "Gratin de morue effilochée & pommes de terre, huile d’olive, thym, salade verte"
      },
      {
        "name": "Demi-magret de canard",
        "priceEuros": 21,
        "description": "Sauce à l’orange, pommes grenailles rôties, légumes de saison"
      }
    ]
  },
  {
    "name": "Les garnitures",
    "dishes": [
      {
        "name": "Polenta croustillante",
        "priceEuros": 5
      },
      {
        "name": "Petite salade",
        "priceEuros": 4
      }
    ]
  },
  {
    "name": "Pour les petits",
    "dishes": [
      {
        "name": "Menu enfant",
        "priceEuros": 12.5,
        "description": "Petit plat du jour + sirop"
      }
    ]
  },
  {
    "name": "Les desserts",
    "dishes": [
      {
        "name": "Crème brûlée pistache",
        "priceEuros": 7,
        "description": "La tradition, avec une pointe de pistache"
      },
      {
        "name": "Tiramisu maison",
        "priceEuros": 7,
        "description": "Vrai mascarpone, bon café. Contient de l’alcool (Marsala)"
      },
      {
        "name": "Moelleux au chocolat & noix",
        "priceEuros": 7,
        "description": "Gâteau au chocolat & noix, cœur moelleux"
      }
    ]
  },
  {
    "name": "Boissons fraîches",
    "dishes": [
      {
        "name": "Citronnade maison (33 cl)",
        "priceEuros": 5
      },
      {
        "name": "Jus d’orange pressé (33 cl)",
        "priceEuros": 5.5
      },
      {
        "name": "Jus de fruits Kookaburra (25 cl)",
        "priceEuros": 4.5,
        "description": "Pomme verte ou Le Detox : pomme + citron + menthe"
      }
    ]
  },
  {
    "name": "Sodas & sirops",
    "dishes": [
      {
        "name": "Sodas (25 cl)",
        "priceEuros": 4,
        "description": "Coca-cola, Coca-cola zero, Orangina, Limonade"
      },
      {
        "name": "Sirop à l’eau (33 cl)",
        "priceEuros": 3,
        "description": "Grenadine, PAC citron, pêche, orgeat, lavande, violette"
      },
      {
        "name": "Supplément sirop",
        "priceEuros": 0.3
      }
    ]
  },
  {
    "name": "Eaux",
    "dishes": [
      {
        "name": "Vittel (1 L)",
        "priceEuros": 6
      },
      {
        "name": "Vittel (50 cl)",
        "priceEuros": 4
      },
      {
        "name": "Perrier (33 cl)",
        "priceEuros": 4
      },
      {
        "name": "San Pellegrino (50 cl)",
        "priceEuros": 4.5
      },
      {
        "name": "San Pellegrino (1 L)",
        "priceEuros": 6.5
      }
    ]
  },
  {
    "name": "Bières",
    "dishes": [
      {
        "name": "Bière du moment",
        "priceLabel": "Demandez-nous"
      },
      {
        "name": "Bière pression L’Amista Blonde",
        "variants": [
          {
            "label": "25 cl",
            "priceEuros": 4
          },
          {
            "label": "50 cl",
            "priceEuros": 7
          }
        ]
      },
      {
        "name": "Brasserie des Gueux – Bouteille",
        "priceEuros": 6.5,
        "description": "IPA ambrée tropical (33 cl)"
      },
      {
        "name": "Jupiler 0,0 sans alcool (25 cl)",
        "priceEuros": 5
      }
    ]
  },
  {
    "name": "Apéritifs & cocktails",
    "dishes": [
      {
        "name": "Kir (12 cl)",
        "priceEuros": 6,
        "description": "Lavande ou pêche"
      },
      {
        "name": "Noilly Prat Original Dry (6 cl)",
        "priceEuros": 6,
        "description": "Vermouth français sec"
      },
      {
        "name": "Sangria maison (33 cl)",
        "priceEuros": 7.5,
        "description": "Vin rouge, jus de fruits, épices de Lulu, tranches d’orange"
      },
      {
        "name": "Spritz Lavande (33 cl)",
        "priceEuros": 10,
        "description": "Sirop de lavande, Blanc de blancs, eau gazeuse"
      },
      {
        "name": "Aperol Spritz (33 cl)",
        "priceEuros": 10,
        "description": "Aperol, Blanc de blancs, eau gazeuse"
      }
    ]
  },
  {
    "name": "Boissons chaudes",
    "dishes": [
      {
        "name": "Espresso",
        "priceEuros": 2
      },
      {
        "name": "Café allongé",
        "priceEuros": 2.2
      },
      {
        "name": "Café noisette",
        "priceEuros": 2.2
      },
      {
        "name": "Café décaféiné",
        "priceEuros": 2.2
      },
      {
        "name": "Café au lait",
        "priceEuros": 3.6
      },
      {
        "name": "Cappuccino",
        "priceEuros": 4
      },
      {
        "name": "Chocolat chaud",
        "priceEuros": 4
      },
      {
        "name": "Thé",
        "priceEuros": 3.5
      }
    ]
  },
  {
    "name": "Les spéciaux · froids ou chauds",
    "dishes": [
      {
        "name": "Café frappé",
        "priceEuros": 5,
        "description": "Café, lait, sirop d’orgeat"
      },
      {
        "name": "Matcha au lait d’avoine",
        "priceEuros": 5
      },
      {
        "name": "Ube au lait d’avoine",
        "priceEuros": 5
      }
    ]
  },
  {
    "name": "Petit déjeuner · sucré",
    "dishes": [
      {
        "name": "Viennoiseries",
        "priceEuros": 1.5,
        "description": "Croissant ou pain au chocolat"
      },
      {
        "name": "Tartine beurre et confiture",
        "priceEuros": 3.5,
        "description": "Pain de campagne grillé, beurre & confiture de saison"
      },
      {
        "name": "Gâteau carotte & chocolat",
        "priceEuros": 4.5
      },
      {
        "name": "Fromage blanc, miel & granola maison",
        "priceEuros": 6
      }
    ]
  },
  {
    "name": "Petit déjeuner · salé",
    "dishes": [
      {
        "name": "Croque Lulu",
        "priceEuros": 7.5,
        "description": "Polenta grillée, jambon cuit Maison Fillière, béchamel & Comté gratiné"
      },
      {
        "name": "Croque végétarien",
        "priceEuros": 7,
        "description": "Polenta grillée, légumes mijotés du moment, béchamel & Comté gratiné"
      },
      {
        "name": "Œufs au thym",
        "priceEuros": 6.5,
        "description": "2 œufs au plat, thym, pain grillé, huile d’olive"
      },
      {
        "name": "Le complet",
        "priceEuros": 11.5,
        "description": "2 œufs au plat, jambon cuit Maison Fillière, légumes mijotés du moment, haricots blancs, pain grillé"
      }
    ]
  },
  {
    "name": "Formules petit déjeuner",
    "dishes": [
      {
        "name": "La Lulu",
        "priceEuros": 7.5,
        "description": "Boisson chaude + jus d’orange pressé + croissant"
      },
      {
        "name": "Les cocottes",
        "priceEuros": 12.5,
        "description": "Boisson chaude + jus d’orange pressé + 2 œufs au thym + pain grillé"
      }
    ]
  },
  {
    "name": "Suppléments petit déjeuner",
    "dishes": [
      {
        "name": "Jambon cuit Maison Fillière",
        "priceEuros": 2
      },
      {
        "name": "Comté",
        "priceEuros": 2
      },
      {
        "name": "Petite salade",
        "priceEuros": 4
      }
    ]
  },
  {
    "name": "Vins blancs",
    "dishes": [
      {
        "name": "Terres Cachées – Ventoux AOP (2025)",
        "description": "Sec et fruité",
        "variants": [
          {
            "label": "Verre",
            "priceEuros": 4.5
          },
          {
            "label": "50 cl",
            "priceEuros": 12
          }
        ]
      },
      {
        "name": "Demazet – IGP Méditerranée 100 % Viognier (2025)",
        "description": "Frais, fruité",
        "variants": [
          {
            "label": "Verre",
            "priceEuros": 5
          },
          {
            "label": "50 cl",
            "priceEuros": 13
          },
          {
            "label": "Bouteille",
            "priceEuros": 19
          }
        ]
      },
      {
        "name": "Domaine Saint Jean Luberon (2025)",
        "description": "Souple, léger, très digeste",
        "variants": [
          {
            "label": "Verre",
            "priceEuros": 6
          },
          {
            "label": "Bouteille",
            "priceEuros": 24
          }
        ]
      },
      {
        "name": "Domaine Vendome – Crozes-Hermitage (2025)",
        "description": "Plus de matière, plus de tenue · Bio",
        "variants": [
          {
            "label": "Verre",
            "priceEuros": 7
          },
          {
            "label": "Bouteille",
            "priceEuros": 29
          }
        ]
      }
    ]
  },
  {
    "name": "Vins rosés",
    "dishes": [
      {
        "name": "Terres Cachées – Ventoux AOP (2025)",
        "description": "Clair et frais",
        "variants": [
          {
            "label": "Verre",
            "priceEuros": 4.5
          },
          {
            "label": "50 cl",
            "priceEuros": 12
          }
        ]
      },
      {
        "name": "La Fauvette à Lunettes – Luberon (2024)",
        "description": "Souple, frais, facile · Bio",
        "variants": [
          {
            "label": "Verre",
            "priceEuros": 5
          },
          {
            "label": "50 cl",
            "priceEuros": 13
          },
          {
            "label": "Bouteille",
            "priceEuros": 19
          }
        ]
      },
      {
        "name": "Château Pas du Cerf – Côtes de Provence (2025)",
        "description": "Élégant, fin, très équilibré · Bio",
        "variants": [
          {
            "label": "Verre",
            "priceEuros": 6.5
          },
          {
            "label": "Bouteille",
            "priceEuros": 28
          }
        ]
      }
    ]
  },
  {
    "name": "Vins rouges",
    "dishes": [
      {
        "name": "Terres Cachées – Ventoux AOP (2025)",
        "description": "Fruité et épicé",
        "variants": [
          {
            "label": "Verre",
            "priceEuros": 4.5
          },
          {
            "label": "50 cl",
            "priceEuros": 12
          }
        ]
      },
      {
        "name": "Domaine de Chantegut – Côtes du Rhône (2024)",
        "description": "Généreux et accessible · Bio",
        "variants": [
          {
            "label": "Verre",
            "priceEuros": 5
          },
          {
            "label": "50 cl",
            "priceEuros": 13
          },
          {
            "label": "Bouteille",
            "priceEuros": 19
          }
        ]
      },
      {
        "name": "Camp Rêves – Côtes du Rhône Villages Gadagne (2024)",
        "description": "Solaire, gourmand, plein de fruits",
        "variants": [
          {
            "label": "Verre",
            "priceEuros": 6
          },
          {
            "label": "Bouteille",
            "priceEuros": 24
          }
        ]
      },
      {
        "name": "Domaine de Chantegut – Vacqueyras (2018)",
        "description": "Épicé, charnu, taillé pour la table",
        "variants": [
          {
            "label": "Verre",
            "priceEuros": 7.5
          },
          {
            "label": "Bouteille",
            "priceEuros": 29
          }
        ]
      },
      {
        "name": "Château de Nalys – Châteauneuf-du-Pape (2020)",
        "description": "Puissant mais élégant, tout en profondeur · Bio",
        "variants": [
          {
            "label": "Verre",
            "priceEuros": 9.5
          },
          {
            "label": "Bouteille",
            "priceEuros": 45
          }
        ]
      }
    ]
  }
];
