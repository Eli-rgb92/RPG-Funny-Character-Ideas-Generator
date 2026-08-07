/*node script.js to run*/
console.log("Hello, enter your character's name as a string into generateCharacter(' '); and then run node script.js to run the RPG generator!");

const races = [
  "overly dramatic Shadow Elf",
  "suspiciously shiny Dwarf",
  "perpetually lost Halfling",
  "caffeine-addicted Gnome",
  "dramatic Gaslighting Tiefling",
  "emotionally unavailable Dragonborn",
  "chronically late Aasimar",
  "conspiracy-theory Kenku",
  "passive-aggressive Firbolg",
  "slightly soggy Triton"
];

const classes = [
  "Rogue",
  "Bard",
  "Warlock",
  "Ranger",
  "Barbarian",
  "Wizard",
  "Paladin",
  "Druid",
  "Monk",
  "Artificer"
];

const traits = [
  "moves silently through darkness… except when wearing jingly boots",
  "can talk to animals, but they all just complain about the weather",
  "has a magical pet that only exists to judge them",
  "radiates an aura of mild inconvenience",
  "can turn invisible, but only when no one is looking",
  "somehow always has the exact right amount of snacks",
  "speaks fluent sarcasm as a bonus language",
  "is immune to guilt trips (but not passive-aggression)",
  "can cast “Detect Bullshit” once per day",
  "leaves glitter everywhere they go, no matter what"
];

const backstories = [
  "once served a forgotten god who still texts them at 3 a.m.",
  "accidentally sold their shadow to a goblin for a sandwich",
  "is on the run from an extremely persistent library fine",
  "used to be a professional pillow fort architect",
  "owes a dragon money and keeps trying to pay in IOUs",
  "was raised by a pack of very judgmental raccoons",
  "got kicked out of bard college for “excessive vibes”",
  "is technically still on probation from the Adventurers Guild",
  "claims to have invented the concept of “brunch”",
  "once tried to dual-wield baguettes in a serious duel"
];

/*Functtions*/
/*gets a random element from the input array.*/
const getRandomElement = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex]
};

/*gets a random element for each array using getRandomElement*/

const generateCharacter = (name) => {
  let randomRace = getRandomElement(races);
  let randomClass = getRandomElement(classes);
  let randomTrait = getRandomElement(traits);
  let randomBackstory = getRandomElement(backstories);

  if (name === ' ') {
    console.log(`${name} is a ${randomRace} ${randomClass}. Special trait: ${randomTrait} Backstory: ${randomBackstory}.`);
  } else {console.log(`You are a ${randomRace} ${randomClass}. Special trait: ${randomTrait} Backstory: ${randomBackstory}.`);}

  
};


generateCharacter();