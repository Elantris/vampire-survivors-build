import { FC } from 'react'
import { Card, Container } from 'react-bootstrap'

const CreditPage: FC = () => {
  return (
    <Container className="py-5">
      <Card className="mb-4">
        <Card.Header>
          <h2>Game</h2>
        </Card.Header>
        <Card.Body>
          <iframe
            title="steam-widget"
            src="https://store.steampowered.com/widget/1794680/"
            frameBorder="0"
            width="646"
            height="190"
          ></iframe>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>
          <h2>Image</h2>
        </Card.Header>
        <Card.Body>
          All images are from{' '}
          <a href="https://vampire-survivors.fandom.com/wiki/Vampire_Survivors_Wiki">Vampire Survivors Wiki | Fandom</a>{' '}
          and under <a href="https://www.fandom.com/licensing">CC-BY-SA</a>.
        </Card.Body>
      </Card>
    </Container>
  )
}

export default CreditPage
