/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Pagination,
  Row,
} from "react-bootstrap";
import {
  blogData,
  blogCategories,
  blogRecentPosts,
  blogTags,
} from "../config/dummy-data";
import { paths } from "../config/paths";

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
    objectFit: "cover",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
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

  blogSidebar: css({
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",

    fontSize: "0.9rem",
  }),

  blogSidebarSectionTitle: css({
    fontSize: "1.125rem",
    fontWeight: 500,
    marginBottom: "0.5rem",
  }),

  blogSidebarSearchInput: css({
    fontSize: "inherit",
  }),

  blogSidebarSearchButton: css({
    color: "white",
    border: "none",
    borderRadius: "0 0.25rem 0.25rem 0",
  }),

  blogSidebarCategories: css({
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",

    color: "#555",
    fontWeight: 500,
  }),

  blogSidebarRecentPostContainer: css({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  }),

  blogSidebarRecentPost: css({
    display: "flex",
    gap: "1rem",
  }),

  blogSidebarRecentPostTitle: css({
    fontWeight: 500,
    color: "inherit",
  }),

  blogSidebarTag: css({
    fontSize: "small",
    padding: "0.25rem 0.75rem",
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

function BlogSidebar() {
  return (
    <section className="p-3" css={styles.blogSidebar}>
      <SearchSection />
      <CategoriesSection />
      <RecentPostSection />
      <TagSection />
    </section>
  );
}

function SearchSection() {
  return (
    <Form>
      <div css={styles.blogSidebarSectionTitle}>Search</div>
      <InputGroup>
        <FormControl
          className="border-right-0"
          aria-label="Search"
          aria-describedby="basic-addon2"
          css={styles.blogSidebarSearchInput}
        />
        <Button
          variant="success"
          className="accent-button px-3"
          css={styles.blogSidebarSearchButton}
        >
          <i className="fa-solid fa-magnifying-glass" />
        </Button>
      </InputGroup>
    </Form>
  );
}

function CategoriesSection() {
  return (
    <div>
      <div css={styles.blogSidebarSectionTitle}>Categories</div>
      <div css={styles.blogSidebarCategories}>
        {blogCategories.map((blogCategory, index) => {
          return (
            <span key={index}>
              {blogCategory.title}{" "}
              <span className="text-secondary font-weight-normal">
                <small>({blogCategory.count})</small>
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

function RecentPostSection() {
  return (
    <div>
      <div css={styles.blogSidebarSectionTitle}>Recent Posts</div>
      <div css={styles.blogSidebarRecentPostContainer}>
        {blogRecentPosts.map((blogRecentPost, index) => {
          const formattedDate = formatDate(blogRecentPost.date);
          return (
            <div key={index} css={styles.blogSidebarRecentPost}>
              <a href="#">
                <img
                  className="normalized-image"
                  src={blogRecentPost.img}
                  alt={blogRecentPost.title}
                  width={75}
                  height={50}
                />
              </a>
              <div className="d-flex flex-column">
                <a href="#" css={styles.blogSidebarRecentPostTitle}>
                  {blogRecentPost.title}
                </a>
                <span className="text-secondary font-weight-normal">
                  <small className="font-italic">{formattedDate}</small>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TagSection() {
  return (
    <div>
      <div css={styles.blogSidebarSectionTitle}>Tags</div>
      {blogTags.map((blogTag, index) => {
        return (
          <Button
            variant="outline-secondary"
            className="mb-2 mr-2 rounded-0"
            size="sm"
            key={index}
            css={styles.blogSidebarTag}
          >
            {blogTag}
          </Button>
        );
      })}
    </div>
  );
}

// utils
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { month: "short", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}
