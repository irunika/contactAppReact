import {Navbar, Container, Nav} from 'react-bootstrap'

export default function ContactsNav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/contacts">Contacts</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  )
}