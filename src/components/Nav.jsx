import { Navbar, Container, Nav } from 'react-bootstrap/'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCakeCandles, faBook } from '@fortawesome/free-solid-svg-icons'

const Navigator = () => {
  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <Nav className='me-auto'>
            <FontAwesomeIcon icon={faHouse} />
            <Link className='nav-item nav-link' to='/'>Home</Link>
            <FontAwesomeIcon icon={faBook} />
            <Link className='nav-item nav-link' to='/contacto'>Contacto</Link>
          </Nav>
          <Navbar.Brand href='#home'>Happy Cake
            {' '}
            <FontAwesomeIcon icon={faCakeCandles} />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </>
  )
}

export default Navigator
