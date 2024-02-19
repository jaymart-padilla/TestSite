/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Card, Col, Container, Row } from "react-bootstrap";
import SubHeader from "./SubHeader";

const styles = {
  cardGrid: css({
    backgroundImage:
      "radial-gradient(circle, rgba(255,255,255) 0%, rgba(238,238,238) 50%, rgba(224,224,224) 100%);",
    padding: "2.75rem 0rem",
  }),

  cardImage: css({
    objectFit: "cover",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  }),
};

export default function CardGrid({
  cardItems,
  title = "",
  description = "",
  colSize = 3,
  withShadow = false,
  imgHeight = 74,
  padded = true,
}) {
  if (!cardItems || !cardItems.length > 0) return null;

  return (
    <section css={styles.cardGrid}>
      <Container>
        {title && <SubHeader title={title} description={description} />}
        <Row className="no-gutters">
          {cardItems.map((cardItem, index) => {
            colSize = colSize < 0 ? 1 : colSize > 12 ? 12 : colSize;
            return (
              <Col
                className="text-center"
                sm={12}
                md={6}
                lg={12 / colSize}
                key={index}
              >
                {padded ? (
                  <PaddedCardItem
                    {...cardItem}
                    imgHeight={imgHeight}
                    withShadow={withShadow}
                  />
                ) : (
                  <CardItem
                    {...cardItem}
                    imgHeight={imgHeight}
                    withShadow={withShadow}
                  />
                )}
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

function PaddedCardItem({
  title,
  description,
  img,
  footer,
  imgHeight,
  withShadow,
}) {
  return (
    <Card className={`py-4 m-3 ${withShadow && "shadow-sm"}`}>
      <Card.Img
        variant="top"
        style={{ padding: "1.25rem", paddingBottom: 0 }}
        src={img}
        alt={title}
        height={imgHeight}
      />
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        {description && <Card.Text>{description}</Card.Text>}
        {footer && (
          <Card.Text>
            <small className="text-muted">{footer}</small>
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
}

function CardItem({ title, description, img, footer, imgHeight, withShadow }) {
  return (
    <Card className={`m-3 ${withShadow && "shadow-sm"}`}>
      <Card.Img
        variant="top"
        src={img}
        alt={title}
        height={imgHeight}
        css={styles.cardImage}
      />
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        {description && <Card.Text>{description}</Card.Text>}
        {footer && (
          <Card.Text>
            <small className="text-muted">{footer}</small>
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
}
