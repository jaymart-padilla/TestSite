/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { paths } from "../config/paths";
import { socialLinks } from "../config/social-links";

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
        <Navbar.Brand
          href={paths.home.url}
          className="text-uppercase font-weight-bold"
        >
          <span className="accent-color">Test</span>Site
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="gap-5">
          <Nav className="ml-auto" css={styles.navContainer}>
            <Nav.Link
              href={paths.home.url}
              className="text-dark nav-container-link"
            >
              {paths.home.text}
            </Nav.Link>
            <NavDropdown title="About" className="text-dark nav-container-link">
              <NavDropdown.Item
                href={paths.about.url}
                className="nav-container-dropdown-link"
              >
                {paths.about.text}
              </NavDropdown.Item>
              <NavDropdown.Item
                href={paths.team.url}
                className="nav-container-dropdown-link"
              >
                {paths.team.text}
              </NavDropdown.Item>
              <NavDropdown.Item
                href={paths.testimonials.url}
                className="nav-container-dropdown-link"
              >
                {paths.testimonials.text}
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#"
                className="nav-container-dropdown-link"
              >
                <span className="mr-4">Deep Dropdown</span>
                <i className="fa-solid fa-chevron-right" />
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href={paths.services.url}
              className="text-dark nav-container-link"
            >
              {paths.services.text}
            </Nav.Link>
            <Nav.Link
              href={paths.portfolio.url}
              className="text-dark nav-container-link"
            >
              {paths.portfolio.text}
            </Nav.Link>
            <Nav.Link
              href={paths.pricing.url}
              className="text-dark nav-container-link"
            >
              {paths.pricing.text}
            </Nav.Link>
            <Nav.Link
              href={paths.blog.url}
              className="text-dark nav-container-link"
            >
              {paths.blog.text}
            </Nav.Link>
            <Nav.Link
              href={paths.contact.url}
              className="text-dark nav-container-link"
            >
              {paths.contact.text}
            </Nav.Link>
          </Nav>
          <div className="d-none d-lg-block mx-2">|</div>
          <Nav>
            <Nav.Link href={socialLinks.twitter} target="_blank">
              <i className="fa-brands fa-twitter" />
            </Nav.Link>
            <Nav.Link href={socialLinks.facebook} target="_blank">
              <i className="fa-brands fa-facebook" />
            </Nav.Link>
            <Nav.Link href={socialLinks.instagram} target="_blank">
              <i className="fa-brands fa-square-instagram" />
            </Nav.Link>
            <Nav.Link href={socialLinks.linkedIn} target="_blank">
              <i className="fa-brands fa-linkedin" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
