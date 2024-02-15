import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Nav,
  Row,
} from "react-bootstrap";
import "../assets/css/footer.css";

const footerLinks = {
  usefulLinks: [
    { title: "Home", url: "#" },
    { title: "About Us", url: "#" },
    { title: "Services", url: "#" },
    { title: "Terms of Service", url: "#" },
    { title: "Privacy Policy", url: "#" },
  ],
  servicesLinks: [
    { title: "Web Design", url: "#" },
    { title: "Web Development", url: "#" },
    { title: "Product Management", url: "#" },
    { title: "Marketing", url: "#" },
    { title: "Graphic Design", url: "#" },
  ],
};

const socialLinks = [
  {
    icon: "fa-brands fa-twitter fa-xl text-light",
    url: "#",
  },
  {
    icon: "fa-brands fa-facebook fa-xl text-light",
    url: "#",
  },
  {
    icon: "fa-brands fa-square-instagram fa-xl text-light",
    url: "#",
  },
  {
    icon: "fa-brands fa-linkedin fa-xl text-light",
    url: "#",
  },
];

export default function Footer() {
  return (
    <>
      <Container fluid className="py-5 bg-dark text-light footer">
        <Row className="container mx-auto">
          <Col className="mb-3">
            <h5>COMPANY</h5>
            <Nav className="flex-column" style={{ gap: "1rem" }}>
              <p className="p-0 mb-0 text-white-50">
                A108 Adam Street
                <br />
                New York, NY 535022
                <br />
                United States
              </p>
              <p className="p-0 mb-0 text-white-50">
                <strong className="footer-info-label">Phone: </strong>+1 5589
                55488 55
                <br />
                <strong className="footer-info-label">Email: </strong>
                info@example.com
              </p>
            </Nav>
          </Col>
          <Col className="mb-3">
            <h6 className="mb-3">Useful Links</h6>
            <Nav className="flex-column">
              {footerLinks.usefulLinks.map((link, index) => {
                return (
                  <Nav.Item className="mb-2" key={index}>
                    <Nav.Link className="p-0 text-white-50" href={link.url}>
                      {link.title}
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Col>
          <Col className="mb-3">
            <h6 className="mb-3">Our Services</h6>
            <Nav className="flex-column">
              {footerLinks.servicesLinks.map((link, index) => {
                return (
                  <Nav.Item className="mb-2" key={index}>
                    <Nav.Link className="p-0 text-white-50" href={link.url}>
                      {link.title}
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Col>
          <Col md={5} className="offset-md-1 mb-3">
            <Form>
              <h6>Subscribe to our newsletter</h6>
              <p className="text-white-50">
                Monthly digest of what`s new and exciting from us.
              </p>
              <InputGroup className="mb-3">
                <FormControl />
                <div className="input-group-append">
                  <Button
                    variant="success"
                    className="px-3"
                    style={{ fontWeight: 500 }}
                  >
                    Subscribe
                  </Button>
                </div>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        className="text-light footer"
        style={{ backgroundColor: "black" }}
      >
        <div className="container d-flex flex-column flex-sm-row justify-content-between py-4">
          <p>
            &copy; Copyright <strong>TestSite</strong>. All rights reserved.
          </p>
          <ul className="list-unstyled d-flex">
            {socialLinks.map((link, index) => (
              <li key={index} className="ml-3">
                <a className="link-body-emphasis" href={link.url}>
                  <i className={link.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
}
