/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Card, Col, Container, Row } from "react-bootstrap";
import BlogSidebar from "./BlogSidebar";
import { formatDate } from "../utils/formateDate";
import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";

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
  }),

  blogCardJumbotron: css({
    position: "relative",
    color: "#444",
    fontSize: "1.25rem",
    fontWeight: 500,
    wordSpacing: "0.175ch",

    "::before": {
      content: '""',
      position: "absolute",

      backgroundColor: "var(--accent-color)",
      width: "0.25rem",
      height: "90%",
      left: 0,
      top: "50%",
      bottom: "50%",
      transform: "translateY(-50%)",
    },
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
        <Markdown
          css={styles.blogCardContent}
          options={{
            wrapper: "article",
            overrides: {
              h2: {
                component: ArticleJumbotron,
              },
              img: {
                component: ArticleImage,
                props: { className: "normalized-image" },
              },
            },
          }}
        >
          {blogContent}
        </Markdown>
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

function ArticleJumbotron({ children }) {
  return (
    <Container
      className="p-5 mb-3 bg-light rounded-3"
      css={styles.blogCardJumbotron}
    >
      <em>{children}</em>
    </Container>
  );
}

export function ArticleImage({ ...props }) {
  return <img {...props} width="100%" />;
}
