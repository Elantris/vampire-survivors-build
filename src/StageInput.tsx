import { FC, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { STAGES } from './gameData'

const StageInput: FC<{
  defaultValue?: string
  onChange?: (newValue: string) => void
}> = ({ defaultValue, onChange }) => {
  const [isCollapse, setIsCollapse] = useState(true)
  const [value, setValue] = useState(defaultValue)

  return (
    <Card>
      <Card.Header
        className="d-flex align-items-center user-select-none cursor-pointer"
        onClick={() => setIsCollapse(!isCollapse)}
      >
        <span>{isCollapse ? <i className="fa-solid fa-eye-slash" /> : <i className="fa-solid fa-eye" />}</span>
        <h2 className="mx-2 mb-0 flex-grow-1">Stage Selection</h2>
        {value ? <span>{STAGES[value].name || ''}</span> : null}
      </Card.Header>
      <Card.Body className={isCollapse ? 'd-none' : ''}>
        {Object.keys(STAGES).map(stageId => (
          <div
            key={stageId}
            className={`stage p-3 ${stageId === value ? 'active' : ''}`}
            onClick={() => {
              setValue(stageId)
              onChange?.(stageId)
            }}
          >
            <Row>
              <Col md={3} sm={6}>
                <div className={`stage-image ${stageId}`} />
              </Col>
              <Col md={9} sm={6} className="d-flex align-items-center">
                <div className="d-flex justify-content-center flex-wrap flex-grow-1">
                  {STAGES[stageId].itemIds.map(itemId => (
                    <div key={itemId} className={`item ${itemId}`} />
                  ))}
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </Card.Body>
    </Card>
  )
}

export default StageInput
