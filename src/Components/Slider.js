/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Carousel, Card, Button } from "react-bootstrap";

const styles = {
  slider: css({
    "& img": {
      width: "100%",
      maxHeight: "65vh",
      height: "65vh",
      objectFit: "cover",
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    },
  }),

  sliderCard: css({
    width: "70%",
    margin: "0 auto",
    backgroundColor: "#00000099",
    borderTop: "0.25rem solid var(--accent-color)",
    borderBottom: "none",
    borderLeft: "none",
    borderRight: "none",
    boxShadow: "none",
    fontSize: "small",

    "@media (max-width: 768px)": {
      width: "100%",
    },
  }),

  sliderCardButton: css({
    color: "#ffffff",
    fontWeight: "bolder",
    fontSize: "small",
    padding: "0.5rem 1.75rem",
  }),
};

export default function Slider() {
  return (
    <Carousel css={styles.slider} prevLabel="" nextLabel="" indicators={false}>
      <Carousel.Item>
        <img src="/images/slider/img-1.jpg" alt="First slide" />
        <Carousel.Caption>
          <Card className="text-center" css={styles.sliderCard}>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.
              </Card.Text>
              <Button
                variant="outline-success"
                size="sm"
                css={styles.sliderCardButton}
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
          <Card className="text-center" css={styles.sliderCard}>
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
                  css={styles.sliderCardButton}
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
