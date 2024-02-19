/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container, Nav, Row, Card } from "react-bootstrap";

const styles = {
  galleryNav: css({
    ".nav-link.active, .show > .nav-link": {
      backgroundColor: "var(--accent-color)",
    },
  }),

  galleryNavItem: css({
    "> a": {
      color: "black",
      fontSize: "small",
      fontWeight: 500,
      textTransform: "uppercase",
    },

    "> a:hover, > a:focus": {
      backgroundColor: "var(--accent-color-muted)",
      color: "white",
    },
  }),
};

const tabs = [
  { title: "All", link: "link-1" },
  { title: "App", link: "link-2" },
  { title: "Card", link: "link-3" },
  { title: "Web", link: "link-4" },
];

const galleryItems = [
  {
    img: "/images/gallery/img-1.jpg",
  },
  {
    img: "/images/gallery/img-2.jpg",
  },
  {
    img: "/images/gallery/img-3.jpg",
  },
  {
    img: "/images/gallery/img-4.jpg",
  },
  {
    img: "/images/gallery/img-5.jpg",
  },
  {
    img: "/images/gallery/img-6.jpg",
  },
  {
    img: "/images/gallery/img-7.jpg",
  },
  {
    img: "/images/gallery/img-8.jpg",
  },
  {
    img: "/images/gallery/img-9.jpg",
  },
];

export default function Gallery() {
  return (
    <Container css={styles} className="my-5">
      <Nav
        variant="pills"
        className="justify-content-center"
        defaultActiveKey="link-1"
        css={styles.galleryNav}
      >
        {tabs.map((tab, index) => {
          return (
            <Nav.Item css={styles.galleryNavItem} key={index}>
              <Nav.Link eventKey={tab.link}>{tab.title}</Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>

      <Row>
        <div className="card-columns p-4">
          {galleryItems.map((galleryItem, index) => {
            return <GalleryItem key={index} img={galleryItem.img} />;
          })}
        </div>
      </Row>
    </Container>
  );
}

function GalleryItem({ img }) {
  return (
    <Card className="p-0" style={{ border: "none" }}>
      <Card.Body style={{ padding: "0.325rem 0" }}>
        <img src={img} alt="Image" width="100%" />
      </Card.Body>
    </Card>
  );
}
