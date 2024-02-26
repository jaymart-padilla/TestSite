/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const styles = {
  cardGrid: css({
    fontSize: "0.9rem",
    padding: "2.75rem",

    ".highlighted-price": {
      color: "white",
      backgroundColor: "var(--accent-color)",
    },
  }),

  pricingCard: css({
    position: "relative",
    overflow: "hidden",
    ".tagged::before": {
      content: "attr(data-tag)",
      position: "absolute",
      top: "4%",
      right: "-27%",
      width: "12rem",
      height: "1.75rem",
      backgroundColor: "var(--accent-color)",
      color: "white",
      fontSize: "small",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transform: "rotate(45deg)",
      zIndex: 1,
    },

    "@media (max-width: 1200px)": {
      ".tagged::before": {
        top: "4%",
        right: "-34%",
      },
    },

    "@media (max-width: 992px)": {
      ".tagged::before": {
        top: "5%",
        right: "-21%",
      },
    },

    "@media (max-width: 768px)": {
      ".tagged::before": {
        top: "7%",
        right: "-12%",
      },
    },

    "@media (max-width: 576px)": {
      ".tagged::before": {
        top: "7%",
        right: "-15%",
      },
    },
  }),

  pricingCardTitle: css({
    fontWeight: 500,
  }),

  pricingCardPrice: css({
    fontSize: "2.4rem",
    fontWeight: "bold",
    wordSpacing: "-0.125rem",

    "&:before": {
      content: '"$"',
      fontSize: "1.5rem",
      position: "relative",
      top: "-1rem",
      left: "-0.25rem",
    },
  }),

  pricingCardPriceMuted: css({
    fontSize: "1.25rem",
    fontWeight: "normal",
    color: "lightgray",
  }),

  pricingCardPerk: css({
    fontSize: "small",
    marginTop: "2ch",
  }),

  pricingCardPerkMuted: css({
    color: "lightgray",
    textDecoration: "line-through",
  }),

  pricingCardInnerBorder: css({
    border: "none",
    padding: "1rem",
  }),
};

export default function PricingCard({ pricingCardItems, colSize = 4 }) {
  if (!pricingCardItems || !pricingCardItems.length > 0) return null;

  // fetch the pricingCardItem with the most perks
  const allPricingCardPerks = pricingCardItems.reduce(
    (acc, curr) => (acc.length > curr.perks.length ? acc : curr.perks),
    []
  );

  return (
    <section css={styles.cardGrid}>
      <Container>
        <Row className="no-gutters">
          {pricingCardItems.map((pricingCardItem, index) => {
            colSize = colSize < 0 ? 1 : colSize > 12 ? 12 : colSize;

            return (
              <Col
                style={{ marginBottom: "1.25rem" }}
                sm={12}
                md={6}
                lg={12 / colSize}
                key={index}
              >
                <PricingCardItem
                  {...pricingCardItem}
                  allPricingCardPerks={allPricingCardPerks}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

function PricingCardItem({
  title,
  highlight,
  tag,
  pricePerMonth,
  perks = [],
  allPricingCardPerks,
}) {
  // get the perks that are not included in the current pricing card (to be crossed out in the UI)
  const notIncludedPerks = allPricingCardPerks.filter((allPricingCardPerk) => {
    return !perks.includes(allPricingCardPerk);
  });

  return (
    <Card className="mx-3 my-1 text-center h-100" css={styles.pricingCard}>
      <div className={tag && "tagged"} data-tag={tag} />
      <Card.Header
        className={`${highlight && "highlighted-price"}`}
        css={[styles.pricingCardTitle, styles.pricingCardInnerBorder]}
      >
        {title}
      </Card.Header>
      <Card.Body>
        <Card.Title className="accent-color" css={styles.pricingCardPrice}>
          {pricePerMonth}
          <span className="lead" css={styles.pricingCardPriceMuted}>
            {" "}
            / month
          </span>
        </Card.Title>
        {perks.map((perk, index) => (
          <Card.Text key={index} css={styles.pricingCardPerk}>
            {perk}
          </Card.Text>
        ))}
        {/* crossed out perks */}
        {notIncludedPerks.map((notIncludedPerk, index) => (
          <Card.Text key={index} css={styles.pricingCardPerkMuted}>
            {notIncludedPerk}
          </Card.Text>
        ))}
      </Card.Body>
      <Card.Footer className="text-muted" css={styles.pricingCardInnerBorder}>
        <Button variant="success" className="accent-button">
          Buy Now
        </Button>
      </Card.Footer>
    </Card>
  );
}
