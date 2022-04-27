import { FC, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { ARCANAS } from './gameData'

const ArcanaInput: FC<{
  defaultValue?: string[]
  onChange?: (newValue: string[]) => void
}> = ({ defaultValue = [], onChange }) => {
  const [isCollapse, setIsCollapse] = useState(true)
  const [value, setValue] = useState(defaultValue)

  const handleClick = (arcanaId: string) => {
    const newValue = value.includes(arcanaId) ? value.filter(v => v !== arcanaId) : [...value, arcanaId].slice(0, 3)
    setValue(newValue)
    onChange?.(newValue)
  }

  return (
    <Card>
      <Card.Header
        className="d-flex align-items-center user-select-none cursor-pointer"
        onClick={() => setIsCollapse(!isCollapse)}
      >
        <span>{isCollapse ? <i className="fa-solid fa-eye-slash" /> : <i className="fa-solid fa-eye" />}</span>
        <h2 className="mx-2 mb-0">Arcana Selection</h2>
      </Card.Header>
      <Card.Body className={isCollapse ? 'd-none' : ''}>
        {Object.keys(ARCANAS).map(arcanaId => (
          <div
            className={`arcana-wrapper p-3 mb-3 ${value.includes(arcanaId) ? 'active' : ''}`}
            onClick={() => handleClick(arcanaId)}
          >
            <Row>
              <Col lg={2} md={3} sm={4} xs={6}>
                <div className={`arcana ${arcanaId} mb-3`} />
              </Col>
              <Col lg={10} md={9} sm={8} xs={6}>
                <h3>{ARCANAS[arcanaId].name}</h3>
                <div className="mb-3">{ARCANAS[arcanaId].description}</div>
                <div className="d-flex flex-wrap">
                  {ARCANAS[arcanaId].itemIds.map(itemId => (
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

export default ArcanaInput
