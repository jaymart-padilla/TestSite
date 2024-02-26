/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const styles = {
  container: css({
    maxWidth: "768px",
  }),

  contactInfo: css({
    margin: "0 auto",

    "@media (max-width: 768px)": {
      flexDirection: "column",
      gap: "2rem",
      marginTop: "-2.75rem",
    },
  }),

  contactInfoContainer: css({
    display: "flex",
    gap: "1rem",
  }),

  contactInfoLabel: css({
    fontSize: "1.25rem",
    fontWeight: 500,
    marginBottom: "0.25rem",
  }),

  contactInfoText: css({
    color: "gray",
  }),

  contactInfoIcon: css({
    color: "var(--accent-color)",
    padding: "1rem 0.25rem",
  }),

  contactForm: css({
    margin: "0 auto",
    marginTop: "1.25rem",
  }),

  contactFormInput: css({
    fontSize: "small",
  }),
};

export default function ContactFormIndex() {
  return (
    <section className="section mt-5">
      <Container>
        <ContactInfo />
        <ContactForm />
      </Container>
    </section>
  );
}

function ContactInfo() {
  return (
    <div
      className="d-flex justify-content-between px-5 py-4"
      css={[styles.container, styles.contactInfo]}
    >
      <div css={styles.contactInfoContainer}>
        <i
          css={styles.contactInfoIcon}
          className="fa-solid fa-location-dot fa-xl"
        />
        <div>
          <p css={styles.contactInfoLabel}>Location:</p>
          <div className="d-flex flex-column">
            <small css={styles.contactInfoText}>A108 Adam Street</small>
            <small css={styles.contactInfoText}>New York, NY 535022</small>
          </div>
        </div>
      </div>
      <div css={styles.contactInfoContainer}>
        <i
          css={styles.contactInfoIcon}
          className="fa-solid fa-envelope fa-xl"
        />
        <div>
          <p css={styles.contactInfoLabel}>Email:</p>
          <div className="d-flex flex-column">
            <small css={styles.contactInfoText}>info@example.com</small>
            <small css={styles.contactInfoText}>contact@example.com</small>
          </div>
        </div>
      </div>
      <div css={styles.contactInfoContainer}>
        <i
          css={styles.contactInfoIcon}
          className="fa-solid fa-mobile-screen fa-xl"
        />
        <div>
          <p css={styles.contactInfoLabel}>Call:</p>
          <div className="d-flex flex-column">
            <small css={styles.contactInfoText}>+1 5589 55488 51</small>
            <small css={styles.contactInfoText}>+1 5589 22475 14</small>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <Form css={[styles.container, styles.contactForm]} style={{ gap: "1rem" }}>
      <Row>
        <Form.Group as={Col} controlId="name" className="mb-4">
          <Form.Control placeholder="Your Name" css={styles.contactFormInput} />
        </Form.Group>
        <Form.Group as={Col} controlId="email" className="mb-4">
          <Form.Control
            type="email"
            placeholder="Your Email"
            css={styles.contactFormInput}
          />
        </Form.Group>
      </Row>
      <Form.Group controlId="subject" className="mb-4">
        <Form.Control placeholder="Subject" css={styles.contactFormInput} />
      </Form.Group>
      <Form.Group controlId="message" className="mb-4">
        <Form.Control
          as="textarea"
          placeholder="Message"
          rows={3}
          css={styles.contactFormInput}
        />
      </Form.Group>
      <Button
        className="d-block mx-auto accent-button"
        variant="success"
        type="submit"
      >
        Send Message
      </Button>
    </Form>
  );
}
