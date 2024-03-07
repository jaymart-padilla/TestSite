import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { paths } from "../config/paths";
import { socialLinks } from "../config/social-links";

export default function TopNav() {
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" className="top-navbar">
                <Navbar.Brand
                    href={paths.home.url}
                    className="text-uppercase font-weight-bold top-navbar-brand"
                >
                    <span className="accent-color">Test</span>Site
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="gap-5">
                    <Nav className="ml-auto top-nav-container">
                        <Nav.Link
                            href={paths.home.url}
                            className="text-dark nav-container-link"
                        >
                            {paths.home.text}
                        </Nav.Link>
                        <NavDropdown
                            title="About"
                            className="text-dark nav-container-link"
                        >
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
                                Deep Dropdown
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
                    <Nav className="d-flex flex-row top-navbar-social-icons">
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
            <style jsx global>
                {`
                    .top-navbar {
                        padding: 0.5rem 0;
                    }

                    .top-navbar-brand {
                        font-size: 1.5rem;
                    }

                    .top-nav-container {
                        font-size: small;
                    }

                    .top-nav-container .nav-container-link {
                        font-weight: 500;
                    }

                    .top-nav-container .nav-link:hover,
                    .top-nav-container .dropdown-toggle.show {
                        color: var(--accent-color) !important;
                    }

                    .top-nav-container .dropdown-menu {
                        padding: 0;
                        border: none;
                    }

                    .top-nav-container .nav-container-dropdown-link {
                        position: relative;
                        font-size: small;
                        font-weight: 500;
                        padding-top: 0.5rem;
                        padding-bottom: 0.5rem;

                        -webkit-transition: 0.3s all ease;
                        -o-transition: 0.3s all ease;
                        transition: 0.3s all ease;
                    }

                    .top-nav-container .nav-container-dropdown-link:hover {
                        color: var(--accent-color) !important;
                        background-color: var(--light-muted);
                        padding-left: 1.75rem;
                    }

                    .top-nav-container .nav-container-dropdown-link:before {
                        content: "";
                        position: absolute;
                        width: 0px;
                        height: 100%;
                        left: 0;
                        bottom: 0;
                        top: 0;
                        opacity: 0;
                        visibility: hidden;
                        z-index: 2;
                        background-color: var(--accent-color);
                    }

                    .top-nav-container
                        .nav-container-dropdown-link:hover:before {
                        visibility: visible;
                        opacity: 100%;
                        width: 0.325rem;
                    }

                    .top-nav-container a.dropdown-toggle.nav-link {
                        color: inherit;
                    }

                    @media (max-width: 992px) {
                        .top-navbar {
                            padding: 0.5rem 1rem;
                        }

                        .top-navbar-social-icons {
                            gap: 1.25rem;
                        }

                        .top-nav-container .nav-container-dropdown-link {
                            border-bottom: 1px solid var(--light-muted);
                        }
                    }
                `}
            </style>
        </Container>
    );
}
