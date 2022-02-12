import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/home">
                    <img
                    alt="Flexo Home"
                    src="/flexo.png"
                    width="50"
                    height="65"
                    className="align-left"
                    />{' '}
                Flexo Web
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/scoreboard">Scoreboard</Nav.Link>
                        <Nav.Link href="/teams">Teams</Nav.Link>
                        <Nav.Link href="/categories">Categories</Nav.Link>
                        <Nav.Link href="/events">Events</Nav.Link>
                        <Nav.Link href="/reports">Reports</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button variant="danger" type="button">Submit Attack</Button>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header