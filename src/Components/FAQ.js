import { Container, Accordion } from "react-bootstrap";
import SubHeader from "./SubHeader";

export default function FAQ({ faqData }) {
    if (!faqData || !faqData.length > 0) return null;

    return (
        <section className="section-darken faq-card-grid">
            <SubHeader title="Frequently Asked Questions" />
            <Container className="mt-5 px-4">
                <FAQAccordion faqData={faqData} />
            </Container>
            <style jsx global>
                {`
                    .faq-card-grid {
                        padding: 2.75rem 0rem;
                    }

                    .faq-accordion {
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;
                    }

                    .faq-accordion .accordion-item {
                        max-width: 768px;
                        width: 100%;
                        margin: 0 auto;
                        background-color: white;
                        border: 1px solid var(--gray-muted);
                    }

                    .faq-accordion .accordion-header {
                        font-size: 1rem;
                        margin: 0;
                    }

                    .faq-accordion .accordion-body {
                        font-size: 0.975rem !important;
                        padding: 0rem 2rem 1rem 2rem !important;
                    }

                    .faq-accordion .accordion-header .accordion-button {
                        color: var(--accent-color);
                        background-color: white;
                        border: none;
                        width: 100%;
                        text-align: left;
                        padding: 1rem 2rem;
                        font-weight: 500;
                    }

                    .faq-accordion
                        .accordion-header
                        .accordion-button.collapsed {
                        color: black;
                    }
                `}
            </style>
        </section>
    );
}

function FAQAccordion({ faqData }) {
    return (
        <Accordion defaultActiveKey="0" className="faq-accordion">
            {faqData.map((faq, index) => {
                return (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>
                            <i className="fa-solid fa-circle-question mr-3" />
                            {faq.question}
                        </Accordion.Header>
                        <Accordion.Body className="py-2 px-4">
                            {faq.answer}
                        </Accordion.Body>
                    </Accordion.Item>
                );
            })}
        </Accordion>
    );
}
