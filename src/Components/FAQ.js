/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SubHeader from "./SubHeader";
import { Container, Accordion } from "react-bootstrap";

const styles = {
  cardGrid: css({
    padding: "2.75rem 0rem",
  }),

  accordion: css({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",

    ".accordion-item": {
      maxWidth: "768px",
      width: "100%",
      margin: "0 auto",
      backgroundColor: "white",
      border: "1px solid var(--gray-muted)",
    },

    ".accordion-header": {
      fontSize: "1rem",
      margin: 0,
    },

    ".accordion-body": {
      fontSize: "0.975rem !important",
      padding: "0rem 2rem 1rem 2rem !important",
    },

    ".accordion-header button": {
      backgroundColor: "white",
      border: "none",
      width: "100%",
      textAlign: "left",
      padding: "1rem 2rem",
      fontWeight: 500,
    },
  }),
};

export default function FAQ({ faqData }) {
  if (!faqData || !faqData.length > 0) return null;

  return (
    <section className="section-darken" css={styles.cardGrid}>
      <SubHeader title="Frequently Asked Questions" />
      <Container className="mt-5 px-4">
        <FAQAccordion faqData={faqData} />
      </Container>
    </section>
  );
}

function FAQAccordion({ faqData }) {
  return (
    <Accordion defaultActiveKey="0" css={styles.accordion}>
      {faqData.map((faq, index) => {
        return (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>
              <i className="fa-solid fa-circle-question mr-3" />
              {faq.question}
            </Accordion.Header>
            <Accordion.Body className="py-2 px-4">{faq.answer}</Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}
