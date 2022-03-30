import { FC } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import BuildPage from './BuildPage'
import CreditPage from './CreditPage'

const App: FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand className="cursor-pointer" onClick={() => navigate('/')}>
          <i className="fa-solid fa-dice-d20 mr-2" />
          Vampire Survivors Build
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
          <Nav.Link onClick={() => navigate('/credit')}>Credit</Nav.Link>
          <Nav.Link href="https://github.com/Elantris/vampire-survivors-build" target="_blank">
            <i className="fa-brands fa-github" /> GitHub
          </Nav.Link>
        </Nav>
      </Navbar>

      <div className="pt-5">
        <Routes>
          <Route path="/" element={<BuildPage />} />
          <Route path="/credit" element={<CreditPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  )
}

export default App
