import { sum } from 'ramda'
import { FC, useState } from 'react'
import { Card } from 'react-bootstrap'
import { ITEMS } from './gameData'

// ! cspell: disable
const CATEGORIES: {
  name: string
  itemIds: string[]
}[] = [
  {
    name: 'Basic Weapons',
    itemIds: [
      'Whip',
      'MagicWand',
      'Knife',
      'Axe',
      'Cross',
      'KingBible',
      'FireWand',
      'Garlic',
      'SantaWater',
      'LightningRing',
      'Pentagram',
      'SongOfMana',
      'PhieraDerTuphello',
      'EightTheSparrow',
      'Peachone',
      'EbonyWings',
    ],
  },
  {
    name: 'Required Accessories',
    itemIds: [
      'HollowHeart',
      'EmptyTome',
      'Bracer',
      'Candelabrador',
      'Clover',
      'Spellbinder',
      'Spinach',
      'Pummarola',
      'Attractorb',
      'Duplicator',
      'Crown',
      'SkullOManiac',
      'Tiragisu',
    ],
  },
  {
    name: 'Evolution Weapons',
    itemIds: [
      'BloodyTear',
      'HolyWand',
      'ThousandEdge',
      'DeathSpiral',
      'HeavenSword',
      'UnholyVespers',
      'Hellfire',
      'SoulEater',
      'LaBorra',
      'ThunderLoop',
      'GorgeousMoon',
      'Mannajja',
      'Phieraggi',
      '',
      'Vandalier',
    ],
  },
  {
    name: 'Other Weapons',
    itemIds: ['Runetracer', 'ClockLancet', 'Laurel', 'Bone', 'CherryBomb'],
  },
  {
    name: 'Other Accessories',
    itemIds: ['Armor', 'Wings', 'StoneMask'],
  },
]
// ! cpsell: enable

type ItemInputValueProps = {
  weaponIds: string[]
  evolvedWeaponIds: string[]
  accessoryIds: string[]
}

const ItemInput: FC<{
  fixedWeaponIds?: string[]
  fixedAccessoryIds?: string[]
  value: ItemInputValueProps
  onChange: (newValue: ItemInputValueProps) => void
}> = ({ fixedWeaponIds = [], fixedAccessoryIds = [], value, onChange }) => {
  const [isCollapse, setIsCollapse] = useState(true)
  const activeITems = [
    ...fixedWeaponIds,
    ...fixedAccessoryIds,
    ...value.weaponIds,
    ...value.evolvedWeaponIds,
    ...value.accessoryIds,
  ]

  const handleClick = (itemId: string) => {
    if (!onChange || fixedWeaponIds.includes(itemId) || fixedAccessoryIds.includes(itemId)) {
      return
    }
    const item = ITEMS[itemId]
    if (item.type === 'weapon') {
      const maxWeapons =
        6 - fixedWeaponIds.length + sum(value.evolvedWeaponIds.map(weaponId => ITEMS[weaponId].extraSlots || 0))

      if (value.weaponIds.includes(itemId)) {
        onChange(
          Object.assign({}, value, {
            weaponIds: value.weaponIds.filter(v => v !== itemId),
            evolvedWeaponIds: value.evolvedWeaponIds.filter(evolvedWeaponId =>
              ITEMS[evolvedWeaponId].required?.every(requiredId => requiredId !== itemId),
            ),
          }),
        )
      } else if (value.weaponIds.length < maxWeapons) {
        onChange(
          Object.assign({}, value, {
            weaponIds: [...value.weaponIds, itemId],
          }),
        )
      }
    } else if (item.type === 'evolved-weapon') {
      if (value.evolvedWeaponIds.includes(itemId)) {
        onChange(
          Object.assign({}, value, {
            evolvedWeaponIds: value.evolvedWeaponIds.filter(v => v !== itemId),
          }),
        )
      } else if (item.required?.every(requiredId => activeITems.includes(requiredId))) {
        onChange(
          Object.assign({}, value, {
            evolvedWeaponIds: [...value.evolvedWeaponIds, itemId],
          }),
        )
      }
    } else if (item.type === 'accessory') {
      if (value.accessoryIds.includes(itemId)) {
        onChange(
          Object.assign({}, value, {
            accessoryIds: value.accessoryIds.filter(v => v !== itemId),
            evolvedWeaponIds: value.evolvedWeaponIds.filter(evolvedWeaponId =>
              ITEMS[evolvedWeaponId].required?.every(requiredId => requiredId !== itemId),
            ),
          }),
        )
      } else if (value.accessoryIds.length < 6) {
        onChange(
          Object.assign({}, value, {
            accessoryIds: [...value.accessoryIds, itemId],
          }),
        )
      }
    }
  }

  return (
    <Card>
      <Card.Header
        className="d-flex align-items-center user-select-none cursor-pointer"
        onClick={() => setIsCollapse(!isCollapse)}
      >
        <span>{isCollapse ? <i className="fa-solid fa-eye-slash" /> : <i className="fa-solid fa-eye" />}</span>
        <h2 className="mx-2 mb-0">Item Selection</h2>
      </Card.Header>
      <Card.Body className={isCollapse ? 'd-none' : ''}>
        <div className="d-flex">
          {CATEGORIES.map(category => (
            <div key={category.name} className="item-list">
              {category.itemIds.map((itemId, index) => {
                if (!itemId) {
                  return (
                    <div key={`empty-${index}`}>
                      <div className="item" />
                    </div>
                  )
                }

                const item = ITEMS[itemId]
                const status =
                  fixedWeaponIds.includes(itemId) || fixedAccessoryIds.includes(itemId)
                    ? 'fixed'
                    : activeITems.includes(itemId)
                    ? 'active'
                    : item.type === 'evolved-weapon' &&
                      !item.required?.every(requiredItemId => activeITems.includes(requiredItemId))
                    ? 'disabled'
                    : undefined

                return (
                  <div key={itemId} className={status} onClick={() => handleClick(itemId)}>
                    <div className={`item ${itemId}`} />
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  )
}

export default ItemInput
