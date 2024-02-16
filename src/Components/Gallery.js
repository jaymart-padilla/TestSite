/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container, Nav, Row, Card } from "react-bootstrap";

const styles = css`
  .gallery-nav-item > a {
    color: black;
    font-size: small;
    font-weight: 500;
    text-transform: uppercase;
  }

  .gallery-nav .nav-link.active,
  .gallery-nav .show > .nav-link {
    background-color: var(--accent-color);
  }

  .gallery-nav-item > a:hover,
  .gallery-nav-item > a:focus {
    background-color: var(--accent-color-muted);
    color: white;
  }
`;

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
    <Container css={styles} className="py-4">
      <Nav
        variant="pills"
        className="justify-content-center gallery-nav"
        defaultActiveKey="link-1"
      >
        {tabs.map((tab, index) => {
          return (
            <Nav.Item className="gallery-nav-item" key={index}>
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
