import { Carousel, Card, Button } from "react-bootstrap";
import "../../assets/css/slider.css";

export default function Slider() {
  return (
    <Carousel className="slider" prevLabel="" nextLabel="" indicators={false}>
      <Carousel.Item>
        <img src="/images/slider/img-1.jpg" alt="First slide" />
        <Carousel.Caption>
          <Card className="text-center slider-card">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.
              </Card.Text>
              <Button
                variant="outline-success"
                size="sm"
                className="slider-card-button"
              >
                Read More
              </Button>
            </Card.Body>
          </Card>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/slider/img-2.jpg" alt="Second slide" />
        <Carousel.Caption>
          <Card className="text-center slider-card">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.
              </Card.Text>
              <Card.Text>
                <Button
                  variant="outline-success"
                  size="sm"
                  className="slider-card-button"
                >
                  Read More
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
