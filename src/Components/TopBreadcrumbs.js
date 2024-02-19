/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Breadcrumb, Container } from "react-bootstrap";

const styles = {
  breadcrumbs: css({
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
  }),
};

export default function TopBreadcrumbs({ links, activeLink }) {
  return (
    <Container fluid css={styles.breadcrumbs}>
      <Container className="d-flex align-items-center justify-content-between p-2">
        <h5 className="m-0">
          <a href={activeLink.url}>{activeLink.text}</a>
        </h5>
        <Breadcrumb>
          {links.map((link, index) => (
            <Breadcrumb.Item
              key={index}
              href={link.url}
              active={link.url === activeLink.url}
            >
              {link.text}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </Container>
    </Container>
  );
}
