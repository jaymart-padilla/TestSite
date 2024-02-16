/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Carousel, Card, Button } from "react-bootstrap";

const styles = css`
  .slider img {
    width: 100%;
    max-height: 65vh;
    height: 65vh;
    object-fit: cover;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .slider .slider-card {
    width: 70%;
    margin: 0 auto;
    background-color: #00000099;
    border-top: 0.25rem solid var(--accent-color);
    border-bottom: none;
    border-left: none;
    border-right: none;
    box-shadow: none;
    font-size: small;
  }

  .slider .slider-card .slider-card-button {
    color: #ffffff;
    font-weight: bolder;
    font-size: small;
    padding: 0.5rem 1.75rem;
  }

  @media (max-width: 768px) {
    .slider .slider-card {
      width: 100%;
    }
  }
`;

export default function Slider() {
  return (
    <section css={styles}>
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
    </section>
  );
}
