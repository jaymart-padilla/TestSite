/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const styles = {
  navContainer: css({
    fontSize: "small",

    ".nav-container-link": {
      fontWeight: "500",
    },
    ".nav-container-dropdown-link": {
      fontSize: "small",
      fontWeight: "500",
    },
  }),
};

export default function TopNav() {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#" className="text-uppercase font-weight-bold">
          <span className="accent-color">Test</span>Site
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="gap-5">
          <Nav className="ml-auto" css={styles.navContainer}>
            <Nav.Link href="#" className="text-dark nav-container-link">
              Home
            </Nav.Link>
            <NavDropdown title="About" className="text-dark nav-container-link">
              <NavDropdown.Item
                href="#"
                className="nav-container-dropdown-link"
              >
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#"
                className="nav-container-dropdown-link"
              >
                Team
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#"
                className="nav-container-dropdown-link"
              >
                Testimonials
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#"
                className="nav-container-dropdown-link"
              >
                <span className="mr-4">Deep Dropdown</span>
                <i className="fa-solid fa-chevron-right" />
              </NavDropdown.Item>
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
