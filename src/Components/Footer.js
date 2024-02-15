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
      <Container fluid className="py-5 text-light footer upper-footer">
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
                  <Nav.Item
                    className="d-flex align-items-center mb-2"
                    style={{ gap: "1ch" }}
                    key={index}
                  >
                    <i
                      className="fa-solid fa-chevron-right fa-2xs"
                      style={{ color: "var(--accent-color)" }}
                    />
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
                  <Nav.Item
                    className="d-flex align-items-center mb-2"
                    style={{ gap: "1ch" }}
                    key={index}
                  >
                    <i
                      className="fa-solid fa-chevron-right fa-2xs"
                      style={{ color: "var(--accent-color)" }}
                    />
                    <Nav.Link className="p-0 text-white-50" href={link.url}>
                      {link.title}
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Col>
          <Col md={5} className="mb-3">
            <Form className="d-flex flex-column" style={{ gap: "0.285rem" }}>
              <h6>Join Our Newsletter</h6>
              <p className="text-white-50">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptates ea facere et esse aliquid.
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
      <Container fluid className="text-light footer lower-footer">
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
