import { FC, useState } from 'react'
import { Container } from 'react-bootstrap'
import ArcanaInput from './ArcanaInput'
import CharacterInput from './CharacterInput'
import { CHARACTERS, STAGES } from './gameData'
import ItemInput from './ItemInput'
import ResultCard from './ResultCard'
import StageInput from './StageInput'

const BuildPage: FC = () => {
  const [characterId, setCharacterId] = useState('Antonio')
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
  const [arcanaIds, setArcanaIds] = useState<string[]>([])

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
          arcanaIds={arcanaIds}
        />
      </div>

      <div className="mb-4">
        <CharacterInput
          defaultValue={characterId}
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
          defaultValue={stageId}
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
          defaultValue={itemIds}
          onChange={newValue => setItemIds(newValue)}
        />
      </div>

      <div className="mb-4">
        <ArcanaInput defaultValue={arcanaIds} onChange={newValue => setArcanaIds(newValue)} />
      </div>
    </Container>
  )
}

export default BuildPage
