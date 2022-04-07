import { FC, useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'

import BuildPage from './BuildPage'
import CreditPage from './CreditPage'

const App: FC = () => {
  const [currentPage, setCurrentPage] = useState('build')

  return (
    <div className="pt-5">
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand className="cursor-pointer" onClick={() => setCurrentPage('build')}>
          <i className="fa-solid fa-dice-d20 mr-2" />
          Vampire Survivors Build
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link onClick={() => setCurrentPage('build')}>Home</Nav.Link>
          <Nav.Link onClick={() => setCurrentPage('credit')}>Credit</Nav.Link>
          <Nav.Link href="https://github.com/Elantris/vampire-survivors-build" target="_blank">
            <i className="fa-brands fa-github" /> GitHub
          </Nav.Link>
        </Nav>
      </Navbar>

      <div className={currentPage === 'build' ? '' : 'd-none'}>
        <BuildPage />
      </div>
      <div className={currentPage === 'credit' ? '' : 'd-none'}>
        <CreditPage />
      </div>
    </div>
  )
}

export default App
