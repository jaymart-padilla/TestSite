/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Card, Col, Container, Row } from "react-bootstrap";

const styles = {
    testimonialCardGrid: css({
        padding: "2.75rem 0rem",
    }),

    testimonialCardGridItem: css({
        margin: "0 0.75rem",
        height: "100%",
        border: "none",
    }),

    testimonialTitle: css({
        fontWeight: 500,
    }),

    testimonialQuote: css({
        margin: 0,
        fontSize: "0.9rem",
        fontStyle: "italic",
        lineHeight: "1.5rem",
        wordSpacing: "0.075rem",
    }),

    testimonialQuoteMarks: css({
        color: "var(--gray-muted)",
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
        <section className="section-darken" css={styles.testimonialCardGrid}>
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
            css={styles.testimonialCardGridItem}
        >
            <Card.Body>
                <img
                    src={img}
                    alt={title}
                    className="d-block rounded-circle mr-1 float-left normalized-image"
                    width={imgPxSize}
                    height={imgPxSize}
                    style={{
                        maxWidth: imgPxSize,
                        maxHeight: imgPxSize,
                        minWidth: imgPxSize,
                        minHeight: imgPxSize,
                    }}
                />
                <div className="d-flex flex-column align-items-start pl-2 pb-3">
                    <strong css={styles.testimonialTitle}>{name}</strong>
                    <small
                        className="text-muted mt-1"
                        css={styles.testimonialTitle}
                    >
                        {title}
                    </small>
                </div>
                <p css={styles.testimonialQuote} className="text-left">
                    <i
                        className="fa-solid fa-quote-left fa-2xl pr-2"
                        css={styles.testimonialQuoteMarks}
                    />
                    {text}
                    <i
                        className="fa-solid fa-quote-right fa-2xl pl-2"
                        css={styles.testimonialQuoteMarks}
                    />
                </p>
            </Card.Body>
        </Card>
    );
}
