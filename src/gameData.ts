// ! cspell: disable
export const CHARACTERS: {
  [key: string]: {
    name: string
    weaponIds: string[]
  }
} = {
  Antonio: {
    name: 'Antonio Belpaese',
    weaponIds: ['Whip'],
  },
  Imelda: {
    name: 'Imelda Belpaese',
    weaponIds: ['MagicWand'],
  },
  Pasqualina: {
    name: 'Pasqualina Belpaese',
    weaponIds: ['Runetracer'],
  },
  Gennaro: {
    name: 'Gennaro Belpaese',
    weaponIds: ['Knife'],
  },
  Arca: {
    name: 'Arca Ladonna',
    weaponIds: ['FireWand'],
  },
  Porta: {
    name: 'Porta Ladonna',
    weaponIds: ['LightningRing'],
  },
  Lama: {
    name: 'Lama Ladonna',
    weaponIds: ['Axe'],
  },
  Poe: {
    name: 'Poe Ratcho',
    weaponIds: ['Garlic'],
  },
  Clerici: {
    name: 'Suor Clerici',
    weaponIds: ['SantaWater'],
  },
  Dommario: {
    name: 'Dommario',
    weaponIds: ['KingBible'],
  },
  Krochi: {
    name: 'Krochi Freetto',
    weaponIds: ['Cross'],
  },
  Christine: {
    name: 'Christine Davain',
    weaponIds: ['Pentagram'],
  },
  Pugnala: {
    name: 'Pugnala Provola',
    weaponIds: ['PhieraDerTuphello', 'EightTheSparrow'],
  },
  Poppea: {
    name: 'Poppea Pecorina',
    weaponIds: ['SongOfMana'],
  },
  Mortaccio: {
    name: 'Mortaccio',
    weaponIds: ['Bone'],
  },
  Cavallo: {
    name: 'Yatta Cavallo',
    weaponIds: ['CherryBomb'],
  },
  Exdash: {
    name: 'Exdash Exiviiq',
    weaponIds: ['EbonyWings'],
  },
  RedDeath: {
    name: 'Mask of the Red Death',
    weaponIds: ['DeathSpiral'],
  },
}

export const STAGES: {
  [StageID: string]: {
    name: string
    itemIds: string[]
  }
} = {
  'Stage-1': {
    name: 'Mad Forest',
    itemIds: ['Spinach', 'Clover', 'HollowHeart', 'Pummarola', 'SkullOManiac'],
  },
  'Stage-2': {
    name: 'Inlaid Library',
    itemIds: ['StoneMask', 'EmptyTome'],
  },
  'Stage-3': {
    name: 'Dairy Plant',
    itemIds: ['Attractorb', 'Candelabrador', 'Wings', 'Armor'],
  },
  Challenge: {
    name: 'Green Acres',
    itemIds: [],
  },
  Bonus: {
    name: 'Il Molise',
    itemIds: [],
  },
}

export const ITEMS: {
  [key: string]: {
    name: string
    type: 'weapon' | 'evolved-weapon' | 'accessory'
    required?: string[]
    extraSlots?: number
  }
} = {
  Whip: {
    name: 'Whip',
    type: 'weapon',
  },
  BloodyTear: {
    name: 'Bloody Tear',
    type: 'evolved-weapon',
    required: ['Whip', 'HollowHeart'],
  },
  MagicWand: {
    name: 'Magic Wand',
    type: 'weapon',
  },
  HolyWand: {
    name: 'Holy Wand',
    type: 'evolved-weapon',
    required: ['MagicWand', 'EmptyTome'],
  },
  Knife: {
    name: 'Knife',
    type: 'weapon',
  },
  ThousandEdge: {
    name: 'Thousand Edge',
    type: 'evolved-weapon',
    required: ['Knife', 'Bracer'],
  },
  Axe: {
    name: 'Axe',
    type: 'weapon',
  },
  DeathSpiral: {
    name: 'Death Spiral',
    type: 'evolved-weapon',
    required: ['Axe', 'Candelabrador'],
  },
  Cross: {
    name: 'Cross',
    type: 'weapon',
  },
  HeavenSword: {
    name: 'Heaven Sword',
    type: 'evolved-weapon',
    required: ['Cross', 'Clover'],
  },
  KingBible: {
    name: 'King Bible',
    type: 'weapon',
  },
  UnholyVespers: {
    name: 'Unholy Vespers',
    type: 'evolved-weapon',
    required: ['KingBible', 'Spellbinder'],
  },
  FireWand: {
    name: 'Fire Wand',
    type: 'weapon',
  },
  Hellfire: {
    name: 'Hellfire',
    type: 'evolved-weapon',
    required: ['FireWand', 'Spinach'],
  },
  Garlic: {
    name: 'Garlic',
    type: 'weapon',
  },
  SoulEater: {
    name: 'Soul Eater',
    type: 'evolved-weapon',
    required: ['Garlic', 'Pummarola'],
  },
  SantaWater: {
    name: 'Santa Water',
    type: 'weapon',
  },
  LaBorra: {
    name: 'La Borra',
    type: 'evolved-weapon',
    required: ['SantaWater', 'Attractorb'],
  },
  LightningRing: {
    name: 'Lightning Ring',
    type: 'weapon',
  },
  ThunderLoop: {
    name: 'Thunder Loop',
    type: 'evolved-weapon',
    required: ['LightningRing', 'Duplicator'],
  },
  Pentagram: {
    name: 'Pentagram',
    type: 'weapon',
  },
  GorgeousMoon: {
    name: 'Gorgeous Moon',
    type: 'evolved-weapon',
    required: ['Pentagram', 'Crown'],
  },
  SongOfMana: {
    name: 'Song of Mana',
    type: 'weapon',
  },
  Mannajja: {
    name: 'Mannajja',
    type: 'evolved-weapon',
    required: ['SongOfMana', 'SkullOManiac'],
  },
  PhieraDerTuphello: {
    name: 'Phiera Der Tuphello',
    type: 'weapon',
  },
  EightTheSparrow: {
    name: 'Eight The Sparrow',
    type: 'weapon',
  },
  Phieraggi: {
    name: 'Phieraggi',
    type: 'evolved-weapon',
    required: ['PhieraDerTuphello', 'EightTheSparrow', 'Tiragisu'],
    extraSlots: 1,
  },
  Peachone: {
    name: 'Peachone',
    type: 'weapon',
  },
  EbonyWings: {
    name: 'Ebony Wings',
    type: 'weapon',
  },
  Vandalier: {
    name: 'Vandalier',
    type: 'evolved-weapon',
    required: ['Peachone', 'EbonyWings'],
    extraSlots: 1,
  },
  Runetracer: {
    name: 'Runetracer',
    type: 'weapon',
  },
  ClockLancet: {
    name: 'Clock Lancet',
    type: 'weapon',
  },
  Laurel: {
    name: 'Laurel',
    type: 'weapon',
  },
  Bone: {
    name: 'Bone',
    type: 'weapon',
  },
  CherryBomb: {
    name: 'Cherry Bomb',
    type: 'weapon',
  },
  Spinach: {
    name: 'Spinach',
    type: 'accessory',
  },
  Armor: {
    name: 'Armor',
    type: 'accessory',
  },
  HollowHeart: {
    name: 'Hollow Heart',
    type: 'accessory',
  },
  Pummarola: {
    name: 'Pummarola',
    type: 'accessory',
  },
  EmptyTome: {
    name: 'Empty Tome',
    type: 'accessory',
  },
  Candelabrador: {
    name: 'Candelabrador',
    type: 'accessory',
  },
  Bracer: {
    name: 'Bracer',
    type: 'accessory',
  },
  Spellbinder: {
    name: 'Spellbinder',
    type: 'accessory',
  },
  Duplicator: {
    name: 'Duplicator',
    type: 'accessory',
  },
  Wings: {
    name: 'Wings',
    type: 'accessory',
  },
  Attractorb: {
    name: 'Attract Orb',
    type: 'accessory',
  },
  Clover: {
    name: 'Clover',
    type: 'accessory',
  },
  Crown: {
    name: 'Crown',
    type: 'accessory',
  },
  StoneMask: {
    name: 'Stone Mask',
    type: 'accessory',
  },
  Tiragisu: {
    name: 'Tiragisú',
    type: 'accessory',
  },
  SkullOManiac: {
    name: "Skull O'Maniac",
    type: 'accessory',
  },
}
