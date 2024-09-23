import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function UserNavbar() {
  return (
    <Navbar fixed="top" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Paws Shelter</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#">Head Admin</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default UserNavbar;