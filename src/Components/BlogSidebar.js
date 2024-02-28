/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { blogCategories, blogData, blogTags } from "../config/dummy-data";
import { formatDate } from "../utils/formateDate";
import { paths } from "../config/paths";

const styles = {
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

export default function BlogSidebar() {
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
        {blogData.map((blog, index) => {
          const formattedDate = formatDate(blog.date);
          return (
            <div key={index} css={styles.blogSidebarRecentPost}>
              <a href={`${paths.blog.url}/${blog.id}`}>
                <img
                  className="normalized-image mt-1"
                  src={blog.img}
                  alt={blog.title}
                  width={75}
                  height={50}
                />
              </a>
              <div className="d-flex flex-column">
                <a
                  href={`${paths.blog.url}/${blog.id}`}
                  css={styles.blogSidebarRecentPostTitle}
                >
                  {blog.title}
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
