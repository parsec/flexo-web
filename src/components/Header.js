import React from 'react'

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src="/flexo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
            Flexo Web
            </Navbar.Brand>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header