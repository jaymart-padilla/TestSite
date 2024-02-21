/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Card, Col, Container, Row } from "react-bootstrap";

const styles = {
  cardGrid: css({
    backgroundImage:
      "radial-gradient(circle, rgba(255,255,255) 0%, rgba(238,238,238) 50%, rgba(224,224,224) 100%);",
    padding: "2.75rem 0rem",
  }),

  cardGridItem: css({
    margin: "0 0.75rem",
    height: "100%",
  }),

  cardImage: css({
    objectFit: "cover",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  }),

  title: css({
    fontWeight: 500,
  }),

  quote: css({
    margin: 0,
    fontSize: "0.9rem",
    fontStyle: "italic",
    lineHeight: "1.5rem",
    wordSpacing: "0.075rem",
  }),

  quoteMarks: css({
    color: "var(--dark-muted)",
  }),
};

export default function TestimonialCard({
  testimonials,
  colSize = 2,
  withShadow = false,
  imgPxSize = 74,
}) {
  if (!testimonials || !testimonials.length > 0) return null;

  return (
    <section css={styles.cardGrid}>
      <Container>
        <Row className="no-gutters">
          {testimonials.map((testimonial, index) => {
            colSize = colSize < 0 ? 1 : colSize > 12 ? 12 : colSize;
            return (
              <Col
                className="text-center"
                style={{ marginBottom: "1.25rem" }}
                sm={12}
                md={6}
                lg={12 / colSize}
                key={index}
              >
                <CardItem
                  {...testimonial}
                  imgPxSize={imgPxSize}
                  withShadow={withShadow}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

function CardItem({ name, title, img, text, imgPxSize, withShadow }) {
  return (
    <Card
      className={`px-3 ${withShadow && "shadow-sm"}`}
      css={styles.cardGridItem}
    >
      <Card.Body>
        <img
          src={img}
          alt={title}
          className="d-block rounded-circle mr-1 float-left"
          width={imgPxSize}
          height={imgPxSize}
          css={styles.cardImage}
          style={{
            maxWidth: imgPxSize,
            maxHeight: imgPxSize,
            minWidth: imgPxSize,
            minHeight: imgPxSize,
          }}
        />
        <div className="d-flex flex-column align-items-start pl-2 pb-3">
          <strong css={styles.title}>{name}</strong>
          <small className="text-muted mt-1" css={styles.title}>
            {title}
          </small>
        </div>
        <p css={styles.quote} className="text-left">
          <i
            className="fa-solid fa-quote-left fa-2xl pr-2"
            css={styles.quoteMarks}
          />
          {text}
          <i
            className="fa-solid fa-quote-right fa-2xl pl-2"
            css={styles.quoteMarks}
          />
        </p>
      </Card.Body>
    </Card>
  );
}
