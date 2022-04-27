import { FC, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { CHARACTERS } from './gameData'

const CharacterInput: FC<{
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
        <h2 className="mx-2 mb-0 d-inline flex-grow-1">Character Selection</h2>
        {value ? <span>{CHARACTERS[value]?.name || ''}</span> : null}
      </Card.Header>
      <Card.Body className={isCollapse ? 'd-none' : ''}>
        <Row>
          {Object.keys(CHARACTERS).map(characterId => (
            <Col
              key={characterId}
              xl={2}
              lg={3}
              md={4}
              sm={6}
              xs={6}
              className="p-0"
              onClick={() => {
                setValue(characterId)
                onChange?.(characterId)
              }}
            >
              <div className={`character-wrapper p-3 ${characterId === value ? 'active' : ''}`}>
                <div className={`character ${characterId}`} />
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  )
}

export default CharacterInput
