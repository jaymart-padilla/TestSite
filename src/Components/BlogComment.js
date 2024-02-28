/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Card } from "react-bootstrap";
import { formatDate } from "../utils/formateDate";

const styles = {
  blogCommentRoot: css({
    minWidth: 275,
    fontSize: "0.9rem",
    fontWeight: 500,
  }),

  blogCommentContainer: css({
    gap: "1.125rem",
  }),

  blogCommentName: css({
    display: "flex",
    gap: "1rem",
    justifyContent: "start",
    alignItems: "center",

    fontSize: "0.975rem",
    margin: 0,
  }),

  blogCommentDate: css({
    color: "gray",
    display: "block",
    marginBottom: "0.125rem",
  }),

  blogCommentText: css({
    color: "#333",
    fontSize: "0.8rem",
  }),
};

export const blogComments = [
  {
    id: 1,
    name: "John Doe",
    date: new Date(2024, 0, 1),
    img: "/images/testimonials/img-2.jpg",
    comment:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas unde accusantium impedit recusandae quis corrupti quia velit fugiat adipisci maxime. Ea dicta quo saepe totam.",
  },
];

export default function BlogComment({ name, date, img, comment }) {
  if (![name, date, img, comment].every(Boolean)) return null;

  const imgPxSize = 64;
  const formattedDate = formatDate(date);

  return (
    <Card className="border-0" css={styles.blogCommentRoot}>
      <Card.Body className="d-flex" css={styles.blogCommentContainer}>
        <img
          src={img}
          alt={name}
          className="d-block normalized-image pt-1"
          width={imgPxSize}
          height={imgPxSize}
          style={{
            maxWidth: imgPxSize,
            maxHeight: imgPxSize,
            minWidth: imgPxSize,
            minHeight: imgPxSize,
          }}
        />
        <div>
          <p css={styles.blogCommentName}>
            {name}{" "}
            <a href="#" className="text-dark">
              <small>
                <i className="fa-solid fa-reply" /> Reply
              </small>
            </a>
          </p>
          <small css={styles.blogCommentDate}>{formattedDate}</small>
          <small css={styles.blogCommentText}>{comment}</small>
        </div>
      </Card.Body>
    </Card>
  );
}
