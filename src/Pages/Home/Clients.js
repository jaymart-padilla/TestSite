import { Card, Col, Container, Row } from "react-bootstrap";
import SubHeader from "../../Components/SubHeader";

const clients = [
  { img: `<i class='fa-brands fa-stripe fa-4x'/>` },
  { img: `<i class='fa-brands fa-wix fa-4x'/>` },
  { img: `<i class='fa-brands fa-line fa-4x'/>` },
  { img: `<i class='fa-brands fa-cc-visa fa-4x'/>` },
  { img: `<i class='fa-brands fa-node fa-4x'/>` },
  { img: `<i class='fa-brands fa-wizards-of-the-coast fa-4x'/>` },
  { img: `<i class='fa-brands fa-sass fa-4x'/>` },
  { img: `<i class='fa-brands fa-less fa-4x'/>` },
];

export default function Clients() {
  return (
    <Container className="my-4">
      <SubHeader title="Clients" />
      <Row className="no-gutters">
        {clients.map((client, index) => {
          return <ClientCardGrid img={client.img} key={index} />;
        })}
      </Row>
    </Container>
  );
}

function ClientCardGrid({ img }) {
  return (
    <Col className="text-center" xs={6} md={4} lg={3}>
      <Card className="rounded-0">
        <Card.Body>
          <div dangerouslySetInnerHTML={{ __html: img }}></div>
        </Card.Body>
      </Card>
    </Col>
  );
}
