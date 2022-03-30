import { FC, useState } from 'react'
import { Container } from 'react-bootstrap'
import CharacterInput from './CharacterInput'
import { CHARACTERS, STAGES } from './gameData'
import ItemInput from './ItemInput'
import ResultCard from './ResultCard'
import StageInput from './StageInput'

const BuildPage: FC = () => {
  const [characterId, setCharacterId] = useState<string>('Antonio')
  const [stageId, setStageId] = useState('Stage-1')
  const [itemIds, setItemIds] = useState<{
    weaponIds: string[]
    evolvedWeaponIds: string[]
    accessoryIds: string[]
  }>({
    weaponIds: [],
    evolvedWeaponIds: [],
    accessoryIds: [],
  })

  return (
    <Container className="py-5">
      <div className="mb-4">
        <ResultCard
          characterId={characterId}
          stageId={stageId}
          fixedItemIds={{
            weaponIds: CHARACTERS[characterId].weaponIds,
            accessoryIds: STAGES[stageId].itemIds,
          }}
          itemIds={itemIds}
        />
      </div>

      <div className="mb-4">
        <CharacterInput
          value={characterId}
          onChange={newValue => {
            setCharacterId(newValue)
            setItemIds(
              Object.assign({}, itemIds, {
                weaponIds: [],
                evolvedWeaponIds: [],
              }),
            )
            console.log(itemIds.weaponIds)
          }}
        />
      </div>

      <div className="mb-4">
        <StageInput
          value={stageId}
          onChange={newValue => {
            setStageId(newValue)
            setItemIds(
              Object.assign({}, itemIds, {
                accessoryIds: [],
                evolvedWeaponIds: [],
              }),
            )
          }}
        />
      </div>

      <div className="mb-4">
        <ItemInput
          fixedWeaponIds={CHARACTERS[characterId].weaponIds}
          fixedAccessoryIds={STAGES[stageId].itemIds}
          value={itemIds}
          onChange={newValue => setItemIds(newValue)}
        />
      </div>
    </Container>
  )
}

export default BuildPage
