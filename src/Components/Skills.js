/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import SubHeader from "./SubHeader";
import { skills } from "../config/dummy-data";

const styles = {
    progress: css({
        ".progress": {
            height: "0.675rem",
        },
        ".progress-bar": {
            backgroundColor: "var(--accent-color)",
        },
    }),

    progressLabel: css({
        fontSize: "0.75rem",
        fontWeight: 500,
    }),
};

export default function Skills() {
    return (
        <Container className="section">
            <SubHeader
                title="Our Skills"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit, sed officia vitae tempore. Vero, omnis aut sequi similique, minima optio rerum eveniet aliquam natus deserunt nobis maiores. Consectetur a sint ea non."
            />
            <Row className="mt-4">
                {skills.map((skill, index) => {
                    return <Progress {...skill} key={index} />;
                })}
            </Row>
        </Container>
    );
}

function Progress({ label, value }) {
    return (
        <Col
            className="text-center pb-3 px-4"
            sm={12}
            md={6}
            css={styles.progress}
        >
            <div className="d-flex justify-content-between align-items-center mb-1">
                <small className="text-uppercase" css={styles.progressLabel}>
                    {label}
                </small>
                <small className="text-uppercase" css={styles.progressLabel}>
                    {value}&#37;
                </small>
            </div>
            <ProgressBar now={value} className="rounded-0" />
        </Col>
    );
}
