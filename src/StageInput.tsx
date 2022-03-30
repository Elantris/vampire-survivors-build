import { FC, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { STAGES } from './gameData'

const StageInput: FC<{
  value?: string
  onChange?: (newValue: string) => void
}> = ({ value, onChange }) => {
  const [isCollapse, setIsCollapse] = useState(true)

  return (
    <Card>
      <Card.Header className="d-flex align-items-center user-select-none cursor-pointer" onClick={() => setIsCollapse(!isCollapse)}>
        <span>{isCollapse ? <i className="fa-solid fa-eye-slash" /> : <i className="fa-solid fa-eye" />}</span>
        <h2 className="mx-2 mb-0 flex-grow-1">Stage Selection</h2>
        {value ? <span>{STAGES[value].name || ''}</span> : null}
      </Card.Header>
      <Card.Body className={isCollapse ? 'd-none' : ''}>
        {Object.keys(STAGES).map(stageId => (
          <div
            key={stageId}
            className={`stage mb-3 p-3 ${stageId === value ? 'active' : ''}`}
            onClick={() => onChange?.(stageId)}
          >
            <Row>
              <Col xs={6} md={3}>
                <div className={`stage-image ${stageId}`} />
              </Col>
              <Col xs={6} md={9} className="d-flex align-items-center">
                <div className="d-flex flex-wrap flex-grow-1">
                  {STAGES[stageId].itemIds.map(item => (
                    <div key={item} className={`item ${item}`} />
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
