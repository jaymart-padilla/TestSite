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
  const maxLetters = 20;
  console.log(activeLink.url);
  return (
    <Container fluid css={styles.breadcrumbs}>
      <Container className="d-flex align-items-center justify-content-between p-2">
        <h5 className="m-0">
          <a href={activeLink.url}>
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
