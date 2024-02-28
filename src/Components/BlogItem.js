/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Card, Col, Container, Row } from "react-bootstrap";
import BlogSidebar from "./BlogSidebar";
import { formatDate } from "../utils/formateDate";
import { useEffect, useState } from "react";
import BlogMarkdownLayout from "../Layouts/BlogMarkdownLayout";

const styles = {
  blogCard: css({ marginBottom: "2.75rem" }),

  blogCardTitle: css({
    fontSize: "1.5rem",
    fontWeight: "bold",
  }),

  blogCardMetaData: css({
    color: "gray",

    display: "flex",
    gap: "1.25rem",
    marginBottom: "0.75rem",
  }),

  blogCardImage: css({
    height: "300px",
  }),

  blogCardContent: css({
    color: "#555",
    fontSize: "0.85rem",
    wordSpacing: "0.175ch",
    paddingBottom: "0.5rem",
  }),
};

export default function BlogItem({ blog }) {
  return (
    <Container className="p-5">
      <Row>
        <Col xs={{ order: 2, span: 12 }} lg={{ order: 1, span: 8 }}>
          <BlogCard {...blog} />
        </Col>
        <Col xs={{ order: 1, span: 12 }} lg={{ order: 2, span: 4 }}>
          <BlogSidebar />
        </Col>
      </Row>
    </Container>
  );
}

function BlogCard({ id, title, author, date, comments, img, content, tags }) {
  const formattedDate = formatDate(date);

  const [blogContent, setBlogContent] = useState("");

  useEffect(() => {
    import(content)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setBlogContent(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

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
        <BlogMarkdownLayout css={styles.blogCardContent}>
          {blogContent}
        </BlogMarkdownLayout>

        <Card.Text css={styles.blogCardMetaData} className="border-top pt-2">
          <small>
            <i className="fa-solid fa-tags mr-2" />
            {tags.map((tag) => tag).join(", ")}
          </small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
