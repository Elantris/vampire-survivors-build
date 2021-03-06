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
  Giovanna: {
    name: 'Giovanna Grana',
    weaponIds: ['GattiAmari'],
  },
  Poppea: {
    name: 'Poppea Pecorina',
    weaponIds: ['SongOfMana'],
  },
  Concetta: {
    name: 'Concetta Caciotta',
    weaponIds: ['ShadowPinion'],
  },
  Mortaccio: {
    name: 'Mortaccio',
    weaponIds: ['Bone'],
  },
  Cavallo: {
    name: 'Yatta Cavallo',
    weaponIds: ['CherryBomb'],
  },
  Ramba: {
    name: 'Bianca Ramba',
    weaponIds: ['Carrello'],
  },
  OSole: {
    name: "O'Sole Meeo",
    weaponIds: ['CelestialDusting'],
  },
  Exdash: {
    name: 'Exdash Exiviiq',
    weaponIds: ['EbonyWings'],
  },
  Toastie: {
    name: 'Toastie',
    weaponIds: ['Peachone'],
  },
  RedDeath: {
    name: 'Mask of the Red Death',
    weaponIds: ['DeathSpiral'],
  },
  Leda: {
    name: 'Leda',
    weaponIds: ['HolyWand'],
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
  'Stage-4': {
    name: 'Gallo Tower',
    itemIds: ['Bracer', 'Spellbinder'],
  },
  Bonus: {
    name: 'Il Molise',
    itemIds: [],
  },
  'Challenge-1': {
    name: 'Green Acres',
    itemIds: [],
  },
  'Challenge-2': {
    name: 'The Bone Zone',
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
  Runetracer: {
    name: 'Runetracer',
    type: 'weapon',
  },
  NoFuture: {
    name: 'NO FUTURE',
    type: 'evolved-weapon',
    required: ['Runetracer', 'Armor'],
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
  GattiAmari: {
    name: 'Gatti Amari',
    type: 'weapon',
  },
  ViciousHunger: {
    name: 'Vicious Hunger',
    type: 'evolved-weapon',
    required: ['GattiAmari', 'StoneMask'],
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
  ShadowPinion: {
    name: 'Shadow Pinion',
    type: 'weapon',
  },
  ValkyrieTurner: {
    name: 'Valkyrie Turner',
    type: 'evolved-weapon',
    required: ['ShadowPinion', 'Wings'],
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
  Carrello: {
    name: 'Carr??llo',
    type: 'weapon',
  },
  CelestialDusting: {
    name: 'Celestial Dusting',
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
  SkullOManiac: {
    name: "Skull O'Maniac",
    type: 'accessory',
  },
  Tiragisu: {
    name: 'Tiragis??',
    type: 'accessory',
  },
}

export const ARCANAS: {
  [key: string]: {
    name: string
    description: string
    itemIds: string[]
  }
} = {
  IV: {
    name: 'Awake',
    description:
      'Gives +3 Revivals. Consuming a Revival gives +10% MaxHealth, +1 Armor, and +5% Might, Area, Duration, and Speed. ',
    itemIds: ['Tiragisu'],
  },
  V: {
    name: 'Chaos in the Dark Night',
    description: 'Overall projectile Speed continuously changes between -50% and +200% over 10 seconds. ',
    itemIds: ['Bracer'],
  },
  VI: {
    name: 'Sarabande of Healing',
    description: 'Healing is doubled. Recovering HP damages nearby enemies for the same amount. ',
    itemIds: ['BloodyTear', 'SoulEater', 'CelestialDusting', 'Pummarola', 'FloorChicken'],
  },
  VII: {
    name: 'Iron Blue Will',
    description: 'Listed weapon projectiles gain up to 3 bounces and might pass through enemies and walls. ',
    itemIds: ['Knife', 'ThousandEdge', 'Axe', 'DeathSpiral', 'PhieraDerTuphello', 'EightTheSparrow', 'Carrello'],
  },
  XI: {
    name: 'Waltz of Pearls',
    description: 'Listed weapon projectiles gain up to 3 bounces. ',
    itemIds: ['MagicWand', 'HolyWand', 'FireWand', 'Hellfire', 'Cross', 'HeavenSword', 'Carrello'],
  },
  XV: {
    name: 'Disco of Gold',
    description: 'Picking up coin bags from the floor triggers Gold Fever. Obtaining gold restores as many HP. ',
    itemIds: ['StoneMask', 'GoldCoin', 'CoinBag', 'RichCoinBag', 'TreasureChest'],
  },
  XVI: {
    name: 'Slash',
    description: 'Enables critical hits for listed weapons. Doubles overall critical damage. ',
    itemIds: ['Knife', 'ThousandEdge', 'Whip', 'BloodyTear', 'Axe', 'DeathSpiral', 'HeavenSword'],
  },
  XVII: {
    name: 'Lost & Found Painting',
    description: 'Overall Duration continuously changes between -50% and +200% over 10 seconds. ',
    itemIds: ['Spellbinder'],
  },
  XVIII: {
    name: 'Boogaloo of Illusions',
    description: 'Overall Area continuously changes between -25% and +50% over 10 seconds. ',
    itemIds: ['Candelabrador'],
  },
  XIX: {
    name: 'Heart of Fire',
    description:
      'Listed weapon projectiles explode on impact. Light sources explode. Character explodes when damaged. ',
    itemIds: ['FireWand', 'Hellfire', 'NormalBrazer'],
  },
}
