import { Card, Col, Container, Row } from "react-bootstrap";
import "../../assets/css/card-grid.css";

const cardItems = [
  {
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet.",
    img: "/images/card-grid/cat.svg",
  },
  {
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet.",
    img: "/images/card-grid/dog.svg",
  },
  {
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet.",
    img: "/images/card-grid/luv.svg",
  },
  {
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet.",
    img: "/images/card-grid/snow.svg",
  },
  {
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet.",
    img: "/images/card-grid/usr.svg",
  },
  {
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet.",
    img: "/images/card-grid/wmn.svg",
  },
];

const IMG_SIZE = 74;

export default function CardGrid() {
  return (
    <section className="card-grid">
      <Container>
        <Row className="no-gutters">
          {cardItems.map((cardItem, index) => {
            return <CardItem {...cardItem} key={index} />;
          })}
        </Row>
      </Container>
    </section>
  );
}

function CardItem({ title, description, img }) {
  return (
    <Col className="text-center" sm={12} md={6} lg={4}>
      <Card className="py-4 m-3">
        <Card.Body>
          <img src={img} alt={title} width={IMG_SIZE} height={IMG_SIZE} />
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
