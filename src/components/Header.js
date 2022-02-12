import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <header>
        <Container fluid>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">
                    <img
                    alt="Flexo Home"
                    src="/flexo.png"
                    width="30"
                    height="35"
                    className="d-inline-block align-top"
                    />{' '}
                Flexo Web
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/scoreboard">Scoreboard</Nav.Link>
                        <Nav.Link href="/events">Events</Nav.Link>
                        <Nav.Link href="/reports">Reports</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button variant="danger" type="button">Submit Attack</Button>
            </Navbar>
        </Container>
    </header>
  )
}

export default Header