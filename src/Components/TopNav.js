import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "../assets/css/top-nav.css";

export default function TopNav() {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home" className="text-uppercase font-weight-bold">
          <span className="text-success">Test</span>Site
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="gap-5">
          <Nav className="ml-auto nav-container">
            <Nav.Link href="#" className="text-dark nav-container-link">
              Home
            </Nav.Link>
            <NavDropdown title="About" className="text-dark nav-container-link">
              <NavDropdown.Item href="#">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#">Team</NavDropdown.Item>
              <NavDropdown.Item href="#">Testimonials</NavDropdown.Item>
              <NavDropdown.Item href="#">Deep Dropdown</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className="text-dark nav-container-link">
              Services
            </Nav.Link>
            <Nav.Link href="#" className="text-dark nav-container-link">
              Portfolio
            </Nav.Link>
            <Nav.Link href="#" className="text-dark nav-container-link">
              Pricing
            </Nav.Link>
            <Nav.Link href="#" className="text-dark nav-container-link">
              Blog
            </Nav.Link>
            <Nav.Link href="#" className="text-dark nav-container-link">
              Contact
            </Nav.Link>
          </Nav>
          <div className="d-none d-lg-block mx-2">|</div>
          <Nav>
            <Nav.Link href="#">
              <i className="fa-brands fa-twitter" />
            </Nav.Link>
            <Nav.Link href="#">
              <i className="fa-brands fa-facebook" />
            </Nav.Link>
            <Nav.Link href="#">
              <i className="fa-brands fa-square-instagram" />
            </Nav.Link>
            <Nav.Link href="#">
              <i className="fa-brands fa-linkedin" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
