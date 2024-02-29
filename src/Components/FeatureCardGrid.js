/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Card, Col, Container, Row } from "react-bootstrap";
import SubHeader from "./SubHeader";
import { features } from "../config/dummy-data";

const styles = {
    cardGridItem: css({
        margin: "0 0.75rem",
        height: "100%",
        border: "none",
    }),

    featureTitle: css({
        fontWeight: 500,
    }),
};

export default function FeatureCardGrid() {
    return (
        <Container className="section">
            <SubHeader
                title="Features"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quo harum fuga deleniti dolores facilis, deserunt dicta voluptatem assumenda, earum error ratione molestiae nulla reiciendis eos amet, ipsum aspernatur quod eius quae alias labore."
            />
            <Row className="no-gutters mt-5">
                {features.map((feature, index) => {
                    return <FeatureCard {...feature} key={index} />;
                })}
            </Row>
        </Container>
    );
}

function FeatureCard({ title, img }) {
    return (
        <Col className="text-center mb-4" xs={6} md={4} lg={3}>
            <Card
                className="rounded-0 border-0 shadow-sm m-3"
                css={styles.cardGridItem}
            >
                <Card.Body
                    className="d-flex justify-content-center align-items-center py-3"
                    style={{ gap: "1.25rem" }}
                >
                    <div dangerouslySetInnerHTML={{ __html: img }}></div>
                    <Card.Text css={styles.featureTitle}>{title}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}
