/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Card, Col, Container, Pagination, Row } from "react-bootstrap";
import { blogData } from "../config/dummy-data";
import { paths } from "../config/paths";
import { formatDate } from "../utils/formateDate";
import BlogSidebar from "./BlogSidebar";

const styles = {
  blogCard: css({ marginBottom: "2.75rem" }),

  blogCardTitle: css({
    fontSize: "1.5rem",
    fontWeight: "bold",
  }),

  blogCardMetaData: css({
    color: "gray",
    marginBottom: "0.75rem",

    display: "flex",
    gap: "1.25rem",
  }),

  blogCardImage: css({
    height: "300px",
  }),

  blogCardContentPreview: css({
    fontSize: "0.85rem",
    color: "#555",
    wordSpacing: "0.175ch",
  }),

  blogCardButton: css({
    width: "fit-content",
  }),

  blogPagination: css({
    display: "flex",
    justifyContent: "center",
    marginTop: "-1rem",

    ".page-item > a": {
      color: "#333",
    },

    ".page-item > a:hover, a:focus": {
      color: "white",
      backgroundColor: "var(--accent-color-muted)",
    },

    ".page-link": {
      border: "none",
      padding: "0.5rem 1.5rem",
    },

    ".page-item.active .page-link": {
      backgroundColor: "var(--accent-color)",
      borderColor: "var(--accent-color)",
      padding: "0.5rem 1rem",
      zIndex: 10,
    },
  }),
};

export default function Blog() {
  return (
    <Container className="p-5">
      <Row>
        <Col xs={{ order: 2, span: 12 }} lg={{ order: 1, span: 8 }}>
          {blogData.map((blog, index) => (
            <BlogCard {...blog} key={blog.id || index} />
          ))}
          <BlogPagination />
        </Col>
        <Col xs={{ order: 1, span: 12 }} lg={{ order: 2, span: 4 }}>
          <BlogSidebar />
        </Col>
      </Row>
    </Container>
  );
}

function BlogCard({ id, title, author, date, comments, img, contentPreview }) {
  const formattedDate = formatDate(date);

  return (
    <Card css={styles.blogCard}>
      <Card.Img
        variant="top"
        src={img}
        alt={`${author}'s Blog: ${title}`}
        className="normalized-image"
        css={styles.blogCardImage}
      />
      <Card.Body className="px-4">
        <Card.Title css={styles.blogCardTitle}>{title}</Card.Title>
        <Card.Text css={styles.blogCardMetaData}>
          <small>
            <i className="fa-regular fa-user mr-2" />
            {author}
          </small>
          <small>
            <i className="fa-regular fa-clock mr-2" />
            {formattedDate}
          </small>
          <small>
            <i className="fa-regular fa-comment-dots mr-2" />
            {comments} comments
          </small>
        </Card.Text>
        <Card.Text css={styles.blogCardContentPreview}>
          {contentPreview}
        </Card.Text>
        <Button
          href={`${paths.blog.url}/${id}`}
          variant="success"
          className="d-block ml-auto accent-button py-1 px-3 font-weight-normal"
          css={styles.blogCardButton}
        >
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}

function BlogPagination() {
  return (
    <Pagination css={styles.blogPagination}>
      <Pagination.Item key={1} activeLabel="">
        1
      </Pagination.Item>
      <Pagination.Item key={2} active={true} activeLabel="">
        2
      </Pagination.Item>
      <Pagination.Item key={3} activeLabel="">
        3
      </Pagination.Item>
    </Pagination>
  );
}
