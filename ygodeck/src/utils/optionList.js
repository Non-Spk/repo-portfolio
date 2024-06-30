const cardGameData = {
  cardTypes: ["Monster", "Spell Card", "Trap Card", "Skill Card", "Token"],
  subTypes: {
    Monster: [
      "Effect",
      "Flip Effect",
      "Flip Tuner Effect",
      "Gemini",
      "Normal",
      "Normal Tuner",
      "Pendulum Effect",
      "Pendulum Effect Ritual",
      "Pendulum Flip Effect",
      "Pendulum Normal",
      "Pendulum Tuner Effect",
      "Ritual Effect",
      "Ritual",
      "Spirit",
      "Toon",
      "Tuner",
      "Union Effect",
      "Fusion",
      "Link",
      "Pendulum Effect Fusion",
      "Synchro",
      "Synchro Pendulum Effect",
      "Synchro Tuner",
      "XYZ",
      "XYZ Pendulum Effect"
    ],
    SpellCard: [
      "Normal",
      "Field",
      "Equip",
      "Continuous",
      "Quick-Play",
      "Ritual"
    ],
    TrapCard: ["Normal", "Continuous", "Counter"],
    SkillCard: [],
    Token: []
  },
  race: [
    "Aqua",
    "Beast",
    "Beast-Warrior",
    "Creator-God",
    "Cyberse",
    "Dinosaur",
    "Divine-Beast",
    "Dragon",
    "Fairy",
    "Fiend",
    "Fish",
    "Insect",
    "Machine",
    "Plant",
    "Psychic",
    "Pyro",
    "Reptile",
    "Rock",
    "Sea Serpent",
    "Spellcaster",
    "Thunder",
    "Warrior",
    "Winged Beast",
    "Wyrm",
    "Zombie"
  ],
  attribute: ["dark", "divine", "earth", "fire", "light", "water", "wind"]
};

const sortCard = {
  sortBy: ["Name", "ATK", "DEF", "Level"],
  sortDir: ["ASC", "DESC"]
};

export { cardGameData, sortCard };
