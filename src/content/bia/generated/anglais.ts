import type { CourseSection } from '@/content/types'

/**
 * ⚠️ FICHIER PRODUIT PAR `scripts/cours-extraire.py`. NE PAS ÉDITER À LA MAIN :
 * toute retouche serait écrasée à la prochaine extraction, et surtout elle
 * romprait la garantie qui fait la valeur de ce fichier — son texte est
 * exactement celui de la couche texte du PDF, au signe près.
 *
 * Source : assets/cours/bia/BIA-Cours6-Anglais-Vocabulaire-2024-06-15.pdf
 * 65 pages, 28891 signes.
 *
 * Pour corriger une coupe de paragraphe ou un titre mal reconnu, corrigez
 * les heuristiques du script et relancez-le, pour que la correction profite
 * aux sept autres cours.
 */
export const anglaisSections: CourseSection[] = [
  {
    "id": "ouverture",
    "number": "",
    "title": "Ouverture",
    "pages": [
      1,
      1
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "cours-theoriques-du-bia",
    "number": "",
    "title": "Cours théoriques du bia",
    "pages": [
      1,
      4
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Anglais Aéronautique"
      },
      {
        "type": "text",
        "text": "pour la réalisation de ces cours d’anglais aéronautique"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "aeronautical-english-file-01-aircraft-types",
    "number": "",
    "title": "Aeronautical english file 01: aircraft types",
    "pages": [
      4,
      5
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "aeronautical-english-file-02-aircraft-structure",
    "number": "",
    "title": "Aeronautical english file 02: aircraft structure",
    "pages": [
      5,
      7
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "aeronautical-english-file-03-wings",
    "number": "",
    "title": "Aeronautical english file 03: wings",
    "pages": [
      7,
      11
    ],
    "blocks": [
      {
        "type": "text",
        "text": "/10"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "wings-position",
    "number": "",
    "title": "Wings position",
    "pages": [
      11,
      12
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Low wing Mid wing"
      },
      {
        "type": "text",
        "text": "High wing Shoulder wing"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "wings-angle",
    "number": "",
    "title": "Wings angle",
    "pages": [
      12,
      13
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Dihedral wings Anhedral wings"
      },
      {
        "type": "text",
        "text": "Inverted gull wing"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "wing-shapes",
    "number": "",
    "title": "Wing shapes",
    "pages": [
      13,
      15
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Straight wings Tapered wings"
      },
      {
        "type": "text",
        "text": "Swept wings Elliptic wings"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      },
      {
        "type": "text",
        "text": "Delta wings Cropped delta wings and canard"
      },
      {
        "type": "text",
        "text": "Biplane Triplane"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "high-lift-devices",
    "number": "",
    "title": "High lift devices",
    "pages": [
      15,
      17
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Plain flap Fowler flap"
      },
      {
        "type": "text",
        "text": "(double, triple) Slotted flaps Leading edge slots"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      },
      {
        "type": "text",
        "text": "Leading edge slats Saw tooth"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "aeronautical-english-file-04-tail-unit",
    "number": "",
    "title": "Aeronautical english file 04: tail unit",
    "pages": [
      17,
      18
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "tail-unit-structure",
    "number": "",
    "title": "Tail unit structure",
    "pages": [
      18,
      19
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "tail-designs-single-fin",
    "number": "",
    "title": "Tail designs : single fin",
    "pages": [
      19,
      21
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Low-set Mid-set"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS High-set T-tail"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "original-designs",
    "number": "",
    "title": "Original designs",
    "pages": [
      21,
      22
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Canard V-tail"
      },
      {
        "type": "text",
        "text": "Twin fin designs."
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "aeronautical-english-file-05-fuselage",
    "number": "",
    "title": "Aeronautical english file 05: fuselage",
    "pages": [
      22,
      23
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "fuselage-designs",
    "number": "",
    "title": "Fuselage designs",
    "pages": [
      23,
      24
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Cylindrical fuselage Squared fuselage"
      },
      {
        "type": "text",
        "text": "Twin boom fuselage Airbrakes"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "aeronautical-english-file-06-landing-gear",
    "number": "",
    "title": "Aeronautical english file 06: landing gear",
    "pages": [
      24,
      25
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Tailwheel undercarriage Tricylcle (nosewheel) undercarriage"
      },
      {
        "type": "text",
        "text": "Flying boat type of seaplane with additional floats Undercarriage layouts:"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "wheel-layouts",
    "number": "",
    "title": "Wheel layouts",
    "pages": [
      25,
      26
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Twin wheels nose gear of a Rafale Single wheel nose gear of a Typhoon Single wheel main gear of a Typhoon 6 wheels bogie of an A330"
      },
      {
        "type": "text",
        "text": "Monotrace landing gear of a Harrier fighter jet."
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "piston-engine",
    "number": "",
    "title": "Piston engine",
    "pages": [
      26,
      27
    ],
    "blocks": [
      {
        "type": "text",
        "text": "V shape d18 cylinder piston engine."
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "jet-engine",
    "number": "",
    "title": "Jet engine",
    "pages": [
      27,
      28
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "turboprop-engine",
    "number": "",
    "title": "Turboprop engine",
    "pages": [
      28,
      30
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Réalisation : André PARIS Ramjet Engine:"
      },
      {
        "type": "text",
        "text": "Rocket Engine"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "engines-ans-air-inlets-mounts",
    "number": "",
    "title": "Engines ans air inlets mounts",
    "pages": [
      30,
      32
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Nose mounted engine Inside the fuselage mounted engine"
      },
      {
        "type": "text",
        "text": "Underwing pod mounted engines Overwinng nacelle mounted engines"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      },
      {
        "type": "text",
        "text": "Rear podded engines Buried in the wing engines"
      },
      {
        "type": "text",
        "text": "Ventral air inlet Lateral air intakes"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "aeronautical-english-file-08-cockpit",
    "number": "",
    "title": "Aeronautical english file 08 : cockpit",
    "pages": [
      32,
      33
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Glider cockpit Airspeed Indicator Vertical Speed Indicator Altimeter"
      },
      {
        "type": "text",
        "text": "Airbrakes lever Magnetic Compass Stick Radio (COM) Traffic Collision Avoidance System"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "light-aircraft-cockpit",
    "number": "",
    "title": "Light aircraft cockpit",
    "pages": [
      33,
      34
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Airspeed Indicator Artificial Horizon Altimeter VOR indicator Tachometer Turn and bank Indicator Heading indicator Vertical Speed Indicator Automatic Direction finder"
      },
      {
        "type": "text",
        "text": "Oil temperature and pressure indicators Voltmeter Ampermeter Switches and breakers Steering wheel Throttle Carburettor heater Rudder pedals"
      },
      {
        "type": "text",
        "text": "/4"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "airliner-cockpit",
    "number": "",
    "title": "Airliner cockpit",
    "pages": [
      34,
      35
    ],
    "blocks": [
      {
        "type": "text",
        "text": "RDR altimeter Airspeed Indicator AH Steering wheel Altimeter Machmeter Heading Indicator Glass Cockpit"
      },
      {
        "type": "text",
        "text": "RMI PFD Engine control instruments"
      },
      {
        "type": "text",
        "text": "Throttles"
      },
      {
        "type": "text",
        "text": "Trim ND"
      },
      {
        "type": "text",
        "text": "34/4"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "combat-aircraft-cockpit",
    "number": "",
    "title": "Combat aircraft cockpit",
    "pages": [
      35,
      35
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Clock"
      },
      {
        "type": "text",
        "text": "G-meter"
      }
    ]
  },
  {
    "id": "ejection-seat",
    "number": "",
    "title": "Ejection seat",
    "pages": [
      35,
      36
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Flaps, AB Oil pressure & & gear temperature Ind. ILS Airspeed AH & slip ind. Indicator Altimeter IFF"
      },
      {
        "type": "text",
        "text": "Stick RMI VSI"
      },
      {
        "type": "text",
        "text": "RDO panel"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "aeronautical-english-file-09-aerodynamics",
    "number": "",
    "title": "Aeronautical english file 09: aerodynamics",
    "pages": [
      36,
      37
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "aeronautical-english-file-10-flight-mechanics",
    "number": "",
    "title": "Aeronautical english file 10: flight mechanics",
    "pages": [
      37,
      42
    ],
    "blocks": [
      {
        "type": "text",
        "text": "1/4"
      },
      {
        "type": "text",
        "text": "Aeronautical_English_10_Flight_Mechanics 2/4 36/63 The elevators go down and the nose of aircraft goes down The elevators go up and the nose of aircraft goes up"
      },
      {
        "type": "text",
        "text": "Aeronautical_English_10_Flight_Mechanics 3/4 37/63"
      },
      {
        "type": "text",
        "text": "Aeronautical_English_10_Flight_Mechanics 4/4 38/63"
      },
      {
        "type": "text",
        "text": "AERONAUTICAL ENGLISH FILE 11: AIRPORT INFRASTRUCTURE AND TRAFFIC PATTERN"
      },
      {
        "type": "text",
        "text": "Airport infrastructure"
      },
      {
        "type": "text",
        "text": "Aeronautical_English_11_Airport_Infrastructure&Traffic_Pattern 1/2"
      },
      {
        "type": "text",
        "text": "Aeronautical_English_11_Airport_Infrastructure&Traffic_Pattern 2/2"
      }
    ]
  },
  {
    "id": "aeronautical-english-file-12-air-navigation",
    "number": "",
    "title": "Aeronautical english file 12: air navigation",
    "pages": [
      43,
      44
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Aeronautical_English_12_Air_Navigation 1/1"
      },
      {
        "type": "text",
        "text": "43/2"
      }
    ]
  },
  {
    "id": "weather-vocabulary",
    "number": "",
    "title": "Weather vocabulary",
    "pages": [
      44,
      46
    ],
    "blocks": [
      {
        "type": "text",
        "text": "source: www.weather.about.com"
      },
      {
        "type": "text",
        "text": "44/2"
      },
      {
        "type": "text",
        "text": "High pressure area Weather map:"
      },
      {
        "type": "text",
        "text": "source: www.as.ysu.edu Occlusion Cold Front Warm Front Low pressure area Wind"
      },
      {
        "type": "text",
        "text": "High pressure area"
      },
      {
        "type": "text",
        "text": "Sigle Anglais Français ADF Automatic Direction Finder Radiocompas APU Auxiliary Power Unit Groupe Auxiliaire de Puissance(GAP) ATC Air Traffic Control contrôle de la circulation aérienne BKN BroKeN fragmentés (5-7 octas) CAT Clear Air Turbulence turbulence en ciel clair"
      }
    ]
  },
  {
    "id": "cavok",
    "number": "",
    "title": "Cavok",
    "pages": [
      46,
      46
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Ceiling And Visibility OK plafond et visibilité OK CVR Cockpit Voice Recorder enregistreur de conversations de poste de pilotage DZ Drizzle Bruine EGT Exhaust Gaz Temperature température des gaz d’échappement"
      }
    ]
  },
  {
    "id": "fcst",
    "number": "",
    "title": "Fcst",
    "pages": [
      46,
      46
    ],
    "blocks": [
      {
        "type": "text",
        "text": "ForeCaST prévu (temps) FDR Flight Data Recorder (the black box) Enregistreur des paramètres de vol (boîte noire) FEW FEW peu ou quelques (1 à 2 octas) FG FoG Brouillard FM FroM à partir de FZ FreeZing surfondu, se congelant GR hail Grêle HZ HaZe brume sèche ILS Instrument Landing System système d'atterrissage aux instruments KT KnoT Nœud LOC LoCally Localement LYR LaYeR en couches"
      }
    ]
  },
  {
    "id": "metar",
    "number": "",
    "title": "Metar",
    "pages": [
      46,
      46
    ],
    "blocks": [
      {
        "type": "text",
        "text": "METeorologicAl Report message d'observation régulière"
      }
    ]
  },
  {
    "id": "nosig",
    "number": "",
    "title": "Nosig",
    "pages": [
      46,
      46
    ],
    "blocks": [
      {
        "type": "text",
        "text": "No significant change in next two hours Pas de changement significatif au cours des 2 heures à venir NSC No Significant Cloud Pas de nuages (0 octa) (remplace SKC en 2010) OVC OVerCast couvert (bouché 8 octas)"
      }
    ]
  },
  {
    "id": "prob",
    "number": "",
    "title": "Prob",
    "pages": [
      46,
      46
    ],
    "blocks": [
      {
        "type": "text",
        "text": "PROBably Probablement RA RAin Pluie RPM Révolutions Per Minute Tours par minutes SCT SCaTtered épars (3-4 octas) SH SHower averse"
      }
    ]
  },
  {
    "id": "shsn",
    "number": "",
    "title": "Shsn",
    "pages": [
      46,
      46
    ],
    "blocks": [
      {
        "type": "text",
        "text": "SHower SNow averse de neige"
      }
    ]
  },
  {
    "id": "sigmet",
    "number": "",
    "title": "Sigmet",
    "pages": [
      46,
      46
    ],
    "blocks": [
      {
        "type": "text",
        "text": "SIGnifiant METeorology phénomènes significatifs SKC SKy Clear ciel clair (remplacé par NSC en 2010) SN SNow Neige TAF Terminal Area Forecast bulletin de prévision d'aérodrome"
      }
    ]
  },
  {
    "id": "tempo",
    "number": "",
    "title": "Tempo",
    "pages": [
      46,
      46
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Temporarily Temporairement"
      }
    ]
  },
  {
    "id": "temsi",
    "number": "",
    "title": "Temsi",
    "pages": [
      46,
      46
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Temps Significatif TS ThunderStorm Orage UTC Universal Time Coordinated temps universel coordonné"
      }
    ]
  },
  {
    "id": "valid",
    "number": "",
    "title": "Valid",
    "pages": [
      46,
      53
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Validity Validité SIGLES couramment employés et leur signification anglaise et française"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      },
      {
        "type": "text",
        "text": "Français Anglais aérofreins airbrakes Aileron aileron Aile wing ailette d’extrémité d’aile (ou penne) winglet allumage ignition altimètre altimeter Altitude altitude Amortir to damp anémomètre ou Badin airspeed indicator approche approach arrière (vers l'arrière de l'appareil) aft Atterrir to land autorisation (clairance) clearance autorisé (pour une option) cleared (for something) avertisseur de décrochage stall warning indicator, stick shaker avion à réaction jet aircraft avion à train classique taildragger, tail-dragger, tailwheel aircraft avion à train tricycle nose wheel or tricycle landing gear plane avion canard (ou plan canard) canard plane avion pressurisé pressurized aircraft bec (de bord d'attaque) slat (of the leading edge) or slot Bielle connecting rod bimoteur twin-engine aircraft bloc moteur (Groupe Moto Propulseur) Powerplant - Engine boîte de vitesse (ou réducteur) gear box bord d'attaque leading edge bord de fuite trailing edge bougie spark plug boulon bolt boussole ou compas compass brouillard fog bruine drizzle brûleur burner brume mist cabine (ou habitacle) cabin (or cockpit) cap heading carter crankcase cisaillement (de vent) windshear commande (une) a control commande d'aérofreins airbrakes lever commandes de vol flight controls compenser to trim compte-tours tachometer couche layer cylindre Cylinder décoller to take off déraper to skid dérive (au sens d’objet) vertical fin [or tail]"
      },
      {
        "type": "text",
        "text": "Liste de vocabulaire aéronautique exigible Français→ Anglais"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS Français Anglais dérive (écart entre cap et route) Drift diffuseur Diffuser dispositif [système] Device écoulement de l’air (vent relatif) Airflow empennage Empennage enregistreur de vol (données) flight data recorder équipage Crew essuie-glace windshield (or windscreen) wiper facteur de charge load factor feu tournant, feu anticollision, strobe rotating light, beacon light, rotating beacon flotteurs float fuselage fuselage glisser to slip - to slide gouverne de profondeur elevator habitacle cockpit hauteur height hélice propeller hélice à vitesse constante constant speed propeller hydravion à coque flying boat hydravion à flotteurs seaplane indicateur de virage (bille-aiguille) turn and slip indicator (turn coordinator) Informer le contrôle aérien to advise ATC (Air Traffic Control) inverser (la poussée) to reverse (thrust) inverseur de poussée reverser or thrust reverser lacet yaw levier lever lisse [dans la structure de l'aile] stringer longeron spar manche à air wind sock, wind cone manche à balai – [volant] stick – control column – [control wheel] moteur engine mouvement motion nervure rib nez nose nœud knot nuage cloud orifice (ou entrée) d'admission inlet (pédale de) palonnier rudder pedal palonnier(s) – gouverne de direction rudder pare-brise windshield (or windscreen) partie d'un avion part of an airplane patins ou skis skids phare de roulage taxi light pieds par minute ft/min (feet/minute) pilote automatique the autopilot, the automatic pilot (AP) piste (d'aéroport) runway plafond ceiling plan fixe horizontal horizontal stabilizer portance lift Poussée thrust"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      },
      {
        "type": "text",
        "text": "Français Anglais pousser sur le manche to push the stick forward prendre un cap to set a heading profil airfoil propulser to propel queue tail radio compas automatic direction finder (ADF) rafale gust réacteur reactor, jet engine refroidissement par air air cooling réservoir (d'essence) (fuel) tank revêtement (d'aile) skin rivet rivet roulette de nez nose wheel roulette de queue tail wheel roulis roll route magnétique magnetic road s’aligner to line up saumon [d'aile] wing tip scruter le ciel to scan the sky se déplacer (au sol) to taxi sortir le train to extend the gear soufflante (conduit de) (duct) fan soupape (d'admission, d'échappement) (intake, exhaust) valve système de commandes de vol électrique a fly-by-wire (FBW) flight-control system tableau de bord instrument panel tangage pitch tôle ou feuille (d’aluminium) (aluminium) sheet tour de contrôle airport control tower tr/min (tour par minute) rpm (round per minute) train (d'atterrissage) fixe fixed gear train (d'atterrissage) principal main (landing) gear train (d'atterrissage) tricycle tricycle landing gear train d'atterrissage landing gear – [undercarriage] train rentrant retractable gear traînée drag traînée de condensation contrails transpondeur transponder tuyère nozzle variomètre vertical speed indicator vent arrière tailwind vent de face (ou vent contraire) headwind vent de travers crosswind verrière canopy vilebrequin crankshaft vis screw vitesse de croisière cruising speed volant Steering wheel volet (hypersustentateur) flap volet compensateur trim tab volet à fente slotted wing flap (or slot flap)"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      },
      {
        "type": "text",
        "text": "Anglais Français a control commande (une) a fly-by-wire (FBW) flight-control system système de commandes de vol électrique aft arrière (vers l'arrière de l'appareil) aileron aileron air cooling refroidissement par air airbrakes aérofreins airbrakes lever commande d'aérofreins airflow écoulement de l’air (vent relatif) airfoil profil airport control tower tour de contrôle airspeed indicator anémomètre ou Badin altimeter altimètre altitude altitude approach approche automatic direction finder (ADF) radio compas bolt boulon burner brûleur cabin (or cockpit) cabine (ou habitacle) canard plane avion canard (ou plan canard) canopy verrière ceiling plafond clearance autorisation (clairance) cleared (for something) autorisé (pour une option) cloud nuage cockpit habitacle compass boussole ou compas connecting rod bielle constant speed propeller hélice à vitesse constante contrails traînée de condensation crankcase carter crankshaft vilebrequin crew équipage crosswind vent de travers cruising speed vitesse de croisière cylinder cylindre device dispositif [système] diffuser diffuseur drag traînée drift dérive (au sens d’écart entre cap et route) drizzle bruine elevator gouverne de profondeur empennage empennage engine moteur (duct) fan soufflante (conduit de) fixed gear train (d'atterrissage) fixe flap volet (hypersustentateur) flight controls commandes de vol flight data recorder enregistreur de vol (données) Liste de vocabulaire aéronautique exigible Anglais → Français"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      },
      {
        "type": "text",
        "text": "Anglais Français float flotteurs flying boat hydravion à coque fog brouillard ft/min (feet/minute) pieds par minute fuselage fuselage gear box boîte de vitesse (ou réducteur) gust rafale heading cap headwind vent de face (ou vent contraire) height hauteur horizontal stabilizer plan fixe horizontal ignition allumage inlet orifice (ou entrée) d'admission instrument panel tableau de bord jet aircraft avion à réaction knot nœud landing gear – [undercarriage] train d'atterrissage layer couche leading edge bord d'attaque lever levier lift portance load factor facteur de charge magnetic road route magnétique main (landing) gear train (d'atterrissage) principal mist brume motion mouvement nose nez nose wheel roulette de nez nose wheel or tricycle landing gear plane avion à train tricycle nozzle tuyère part of an airplane partie d'un avion pitch tangage power plant bloc moteur (Groupe Moto Propulseur) pressurized aircraft avion pressurisé propeller hélice reactor, jet engine réacteur retractable gear train rentrant reverser or thrust reverser inverseur de poussée rib nervure rivet rivet roll roulis rotating light, beacon light, rotating beacon feu tournant, feu anticollision, strobe rpm (round per minute) tr/min (tour par minute) rudder palonnier(s) – (gouverne de direction) rudder pedals (rudder bar) (pédale ou commande de) palonniers runway piste (d'aéroport) screw vis seaplane hydravion à flotteurs sheet (aluminium sheet) tôle ou feuille (d’aluminium) skids patins ou skis"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      },
      {
        "type": "text",
        "text": "Anglais Français skin revêtement (d'aile) slat (of the leading edge) bec (de bord d'attaque) slotted wing flap (or slot flap) volet à fente spark plug bougie spar longeron stall warning indicator, stick shaker avertisseur de décrochage stick – control column – [control wheel] manche à balai – [volant] stringer lisse [dans la structure de l'aile] tachometer compte-tours tail queue tail wheel roulette de queue taildragger, tail-dragger, tailwheel aircraft avion à train classique tailwind vent arrière (fuel) tank réservoir (d'essence) taxi light phare de roulage the autopilot, the automatic pilot (AP) pilote automatique thrust poussée to advise ATC (Air Traffic Control) Informer le contrôle aérien to damp amortir to extend the gear sortir le train to land atterrir to line up s’aligner to propel propulser to push the stick forward pousser sur le manche to reverse (thrust) inverser (la poussée) to scan the sky scruter le ciel to set a heading prendre un cap to skid déraper to slip / to slide glisser to take off décoller to taxi se déplacer (au sol) to trim compenser trailing edge bord de fuite transponder transpondeur tricycle landing gear train (d'atterrissage) tricycle trim tab volet compensateur turn and slip indicator (turn coordinator) indicateur de virage (bille-aiguille) twin-engine aircraft bimoteur (intake, exhaust) valve soupape (d'admission, d'échappement) vertical fin [or tail] dérive (au sens d’objet) vertical speed indicator variomètre wind sock, wind cone manche à air windshear cisaillement (de vent) windshield (or windscreen) pare-brise windshield (or windscreen) wiper essuie-glace winglet ailette d’extrémité d’aile (ou penne) wing aile wing tip saumon [d'aile] yaw lacet"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      }
    ]
  },
  {
    "id": "parts-of-an-aircraft-basic-components",
    "number": "",
    "title": "Parts of an aircraft  -  basic components",
    "pages": [
      53,
      58
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Quelques schémas légendés en anglais pillés sur la toile. Vu le grand nombre de schémas, les informations sont redondantes."
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      },
      {
        "type": "text",
        "text": "Vertical stabilizer"
      },
      {
        "type": "text",
        "text": "Rudder"
      },
      {
        "type": "text",
        "text": "Wing"
      },
      {
        "type": "text",
        "text": "Nacelle Horizontal stabilizer"
      },
      {
        "type": "text",
        "text": "0 - -•• '\\ Fuselage"
      },
      {
        "type": "text",
        "text": "Vertical stabilizer"
      },
      {
        "type": "text",
        "text": "Nose gear"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS Schémas détaillés des différentes parties légendés en anglais Avion complet Aile & structure"
      },
      {
        "type": "text",
        "text": "Fuselage Moteur"
      },
      {
        "type": "text",
        "text": "Volets Empennage"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS Fuselage détails Fuselage détails"
      },
      {
        "type": "text",
        "text": "Train d'atterrissage détails Landing gear détails"
      },
      {
        "type": "text",
        "text": "Hydraulic Landing gear brakes"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS RU DDE R R Up -5 _ 0-:: :"
      },
      {
        "type": "list",
        "items": [
          "4"
        ]
      },
      {
        "type": "text",
        "text": "/ ' -"
      }
    ]
  },
  {
    "id": "flaps",
    "number": "",
    "title": "Flaps -",
    "pages": [
      58,
      58
    ],
    "blocks": [
      {
        "type": "text",
        "text": "25° 35°"
      },
      {
        "type": "text",
        "text": "FLAPS IN TO POSITION"
      },
      {
        "type": "text",
        "text": "z- :i"
      }
    ]
  },
  {
    "id": "j-r-2-1",
    "number": "",
    "title": ",,j,,r 2=-1",
    "pages": [
      58,
      58
    ],
    "blocks": [
      {
        "type": "text",
        "text": "PITCH TRIM"
      }
    ]
  },
  {
    "id": "in-green",
    "number": "",
    "title": "In green",
    "pages": [
      58,
      65
    ],
    "blocks": [
      {
        "type": "text",
        "text": "ARC POWER MANAGEMENT K NOB IN TO POSITION"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS Schémas de moteurs légendés en anglais"
      },
      {
        "type": "text",
        "text": "Moteur à explosion (4 temps)."
      },
      {
        "type": "text",
        "text": "Turboréacteur simple flux Turboréacteur double flux"
      },
      {
        "type": "text",
        "text": "Turbopropulseur Statoréacteur"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      },
      {
        "type": "text",
        "text": "Horizontal Stabilizer - Elevator"
      },
      {
        "type": "text",
        "text": "Horizontal Stabilizer"
      },
      {
        "type": "text",
        "text": "Center of Gravity"
      },
      {
        "type": "text",
        "text": "Resulting Motion"
      },
      {
        "type": "text",
        "text": "Vertical Stabilizer - Rudder Side Force (F)"
      },
      {
        "type": "text",
        "text": "Resulting Motion"
      },
      {
        "type": "text",
        "text": "Center of Gravity"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS Ailerons"
      },
      {
        "type": "text",
        "text": "Right Aileron Right Force (Fr) Left Force (FI)"
      },
      {
        "type": "text",
        "text": "I I"
      },
      {
        "type": "text",
        "text": "lncreased Lift I I I I I Resulting Motion"
      },
      {
        "type": "text",
        "text": "Flaps and Slats"
      },
      {
        "type": "text",
        "text": "Slat"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS Schémas d'hélicoptères légendés en anglais"
      },
      {
        "type": "text",
        "text": "Commandes de l'hélicoptère Vitesse relative des pales"
      },
      {
        "type": "text",
        "text": "Pilotage Pilotage"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      },
      {
        "type": "text",
        "text": "Description de l'hélicoptère"
      },
      {
        "type": "text",
        "text": "Système de Commandes de l'hélicoptère 1 . Tail rotor control system"
      },
      {
        "type": "text",
        "text": "2. Cyclic control system"
      },
      {
        "type": "text",
        "text": "3. Collective control system"
      },
      {
        "type": "text",
        "text": "4. Mixing lever assembly"
      },
      {
        "type": "text",
        "text": "5. Cyclic servo actuators"
      },
      {
        "type": "text",
        "text": "6. Collective servo actuator"
      },
      {
        "type": "text",
        "text": "7. Swashplate assembly"
      },
      {
        "type": "text",
        "text": "8. Control tube actuators"
      },
      {
        "type": "text",
        "text": "9. Pitch trim damper"
      },
      {
        "type": "text",
        "text": "10. Roll computer"
      },
      {
        "type": "text",
        "text": "11. Pitch computer"
      },
      {
        "type": "text",
        "text": "12. Roll trim damper"
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS Schémas relatifs aux engins spatiaux, fusées et maquettes."
      },
      {
        "type": "text",
        "text": "Réalisation : André PARIS"
      },
      {
        "type": "text",
        "text": "  "
      },
      {
        "type": "text",
        "text": "pour la réalisation de ce cours d’Anglais"
      },
      {
        "type": "text",
        "text": "  "
      }
    ]
  }
]
