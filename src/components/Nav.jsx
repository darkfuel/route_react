import { Navbar, Container, Nav } from 'react-bootstrap/'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCakeCandles } from '@fortawesome/free-solid-svg-icons'

const Navigator = () => {
  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <Nav className='me-auto'>
            <Link className='nav-item nav-link' to='/'>Home</Link>
            <Link className='nav-item nav-link' to='/contacto'>Contacto</Link>
          </Nav>
          <Navbar.Brand href='#home'>Happy Cake
            {' '}
            <FontAwesomeIcon icon={faCakeCandles} />
            {/* <img
              alt=''
              src='/img/logo.svg'
              width='30'
              height='30'
              className='d-inline-block align-top'
            /> */}
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </>
  )
}

export default Navigator
