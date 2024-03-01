/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Breadcrumb, Container } from "react-bootstrap";

const styles = {
    topBreadcrumbs: css({
        backgroundColor: "var(--accent-color)",

        ".breadcrumb": {
            backgroundColor: "var(--accent-color)",
            marginBottom: 0,
        },

        "& a, .breadcrumb-item+.breadcrumb-item::before": {
            color: "white",
        },

        ".breadcrumb-item.active": {
            color: "var(--light-muted)",
        },

        "ol.breadcrumb": {
            padding: "0.75rem 0",
        },
    }),
};

export default function TopBreadcrumbs({ links, activeLink }) {
    const maxLetters = 20;

    return (
        <Container fluid css={styles.topBreadcrumbs}>
            <Container className="d-flex align-items-center justify-content-between py-2 px-3">
                <h5 className="m-0">
                    <a
                        href={activeLink.url}
                        data-toggle="tooltip"
                        title={activeLink.text || ""}
                    >
                        {truncateText(activeLink.text, maxLetters)}
                    </a>
                </h5>
                <Breadcrumb>
                    {links.map((link, index) => (
                        <Breadcrumb.Item
                            key={index}
                            href={link.url}
                            active={link.url === activeLink.url}
                        >
                            {truncateText(link.text, maxLetters)}
                        </Breadcrumb.Item>
                    ))}
                </Breadcrumb>
            </Container>
        </Container>
    );
}

function truncateText(text = "", length) {
    return text.length > length ? text.slice(0, length) + "..." : text;
}
