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
      'Runetracer',
      'LightningRing',
      'Pentagram',
      'PhieraDerTuphello',
      'EightTheSparrow',
      'SongOfMana',
      'GattiAmari',
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
      'Armor',
      'Duplicator',
      'Crown',
      'Tiragisu',
      '',
      'SkullOManiac',
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
      'NoFuture',
      'ThunderLoop',
      'GorgeousMoon',
      'Phieraggi',
      '',
      'Mannajja',
      '',
      'Vandalier',
    ],
  },
  {
    name: 'Other Weapons',
    itemIds: ['ClockLancet', 'Laurel', 'Bone', 'CherryBomb', 'Carrello', 'CelestialDusting'],
  },
  {
    name: 'Other Accessories',
    itemIds: ['Wings', 'StoneMask'],
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
  defaultValue?: ItemInputValueProps
  onChange?: (newValue: ItemInputValueProps) => void
}> = ({
  fixedWeaponIds = [],
  fixedAccessoryIds = [],
  defaultValue = {
    weaponIds: [],
    evolvedWeaponIds: [],
    accessoryIds: [],
  },
  onChange,
}) => {
  const [isCollapse, setIsCollapse] = useState(true)
  const [value, setValue] = useState(defaultValue)
  const activeITems = [
    ...fixedWeaponIds,
    ...fixedAccessoryIds,
    ...value.weaponIds,
    ...value.evolvedWeaponIds,
    ...value.accessoryIds,
  ]

  const handleClick = (itemId: string) => {
    if (fixedWeaponIds.includes(itemId) || fixedAccessoryIds.includes(itemId)) {
      return
    }
    const item = ITEMS[itemId]
    if (item.type === 'weapon') {
      const maxWeaponSlots =
        6 - fixedWeaponIds.length + sum(value.evolvedWeaponIds.map(weaponId => ITEMS[weaponId].extraSlots || 0))

      if (value.weaponIds.includes(itemId)) {
        // remove weapon
        const newValue = Object.assign({}, value, {
          weaponIds: value.weaponIds.filter(v => v !== itemId),
          evolvedWeaponIds: value.evolvedWeaponIds.filter(evolvedWeaponId =>
            ITEMS[evolvedWeaponId].required?.every(requiredId => requiredId !== itemId),
          ),
        })
        setValue(newValue)
        onChange?.(newValue)
      } else if (value.weaponIds.length < maxWeaponSlots) {
        // append weapon
        const newValue = Object.assign({}, value, {
          weaponIds: [...value.weaponIds, itemId],
        })
        setValue(newValue)
        onChange?.(newValue)
      }
    } else if (item.type === 'evolved-weapon') {
      if (value.evolvedWeaponIds.includes(itemId)) {
        // remove evolved weapon
        const newValue = Object.assign({}, value, {
          evolvedWeaponIds: value.evolvedWeaponIds.filter(v => v !== itemId),
        })
        setValue(newValue)
        onChange?.(newValue)
      } else if (item.required?.every(requiredId => activeITems.includes(requiredId))) {
        // append evolved weapon
        const newValue = Object.assign({}, value, {
          evolvedWeaponIds: [...value.evolvedWeaponIds, itemId],
        })
        setValue(newValue)
        onChange?.(newValue)
      }
    } else if (item.type === 'accessory') {
      if (value.accessoryIds.includes(itemId)) {
        // remove accessory
        const newValue = Object.assign({}, value, {
          accessoryIds: value.accessoryIds.filter(v => v !== itemId),
          evolvedWeaponIds: value.evolvedWeaponIds.filter(evolvedWeaponId =>
            ITEMS[evolvedWeaponId].required?.every(requiredId => requiredId !== itemId),
          ),
        })
        setValue(newValue)
        onChange?.(newValue)
      } else if (value.accessoryIds.length < 6) {
        // append accessory
        const newValue = Object.assign({}, value, {
          accessoryIds: [...value.accessoryIds, itemId],
        })
        setValue(newValue)
        onChange?.(newValue)
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
