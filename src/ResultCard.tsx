import { sum } from 'ramda'
import { FC } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { ITEMS, STAGES } from './gameData'

const ResultCard: FC<{
  characterId: string
  stageId: string
  fixedItemIds: {
    weaponIds: string[]
    accessoryIds: string[]
  }
  itemIds: {
    weaponIds: string[]
    evolvedWeaponIds: string[]
    accessoryIds: string[]
  }
}> = ({ characterId, stageId, fixedItemIds, itemIds }) => {
  const weaponIds = [...fixedItemIds.weaponIds, ...itemIds.weaponIds]
  const maxWeapons = 6 + sum(itemIds.evolvedWeaponIds.map(weaponId => ITEMS[weaponId].extraSlots || 0))

  return (
    <Card>
      <Card.Header>
        <h2 className="mb-0">Patch 0.3.2</h2>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xl={2} lg={3} md={4} sm={6}>
            <div className={`character ${characterId} mb-3`} />
            <div className={`stage-image ${stageId}`} />
          </Col>
          <Col>
            <div className="d-flex mb-2">
              {weaponIds.map((itemId, index) => {
                const evolvedWeaponId = itemIds.evolvedWeaponIds.find(
                  evolvedWeaponId => ITEMS[evolvedWeaponId].required?.[0] === itemId,
                )
                if (evolvedWeaponId) {
                  return <div key={itemId} className={`item mr-2 ${evolvedWeaponId}`} />
                } else {
                  return <div key={index} className="item mr-2" />
                }
              })}
            </div>

            <div className="d-flex mb-2">
              {weaponIds.map(itemId => (
                <div key={itemId} className={`item ${itemId} mr-2`} />
              ))}
              {weaponIds.length < maxWeapons
                ? new Array(maxWeapons - weaponIds.length)
                    .fill(0)
                    .map((v, i) => <div key={i} className="item available mr-2" />)
                : null}
            </div>

            <div className="d-flex mb-2">
              {itemIds.accessoryIds
                .filter(itemId => !STAGES[stageId].itemIds.includes(itemId))
                .map(itemId => (
                  <div key={itemId} className={`item ${itemId} mr-2`} />
                ))}
              {itemIds.accessoryIds.length < 6
                ? new Array(6 - itemIds.accessoryIds.length)
                    .fill(0)
                    .map((v, i) => <div key={i} className={`item available mr-2`} />)
                : null}
            </div>

            <div className="d-flex">
              {STAGES[stageId].itemIds.map(itemId => (
                <div key={itemId} className={`item ${itemId} mr-2`} />
              ))}
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default ResultCard
