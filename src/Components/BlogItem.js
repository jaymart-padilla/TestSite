/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import BlogSidebar from "./BlogSidebar";
import { formatDate } from "../utils/formateDate";
import { useEffect, useState } from "react";
import BlogMarkdownLayout from "../Layouts/BlogMarkdownLayout";
import BlogComment from "./BlogComment";
import { blogComment } from "../config/dummy-data";

const styles = {
    blogCard: css({ marginBottom: "2rem" }),

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

    blogProfileCardGridItem: css({
        fontWeight: 500,
    }),

    blogProfileCardGridItemContainer: css({
        gap: "1.125rem",
    }),

    blogProfileCardItemName: css({
        fontSize: "1.175rem",
        margin: 0,
    }),

    blogProfileCardItemSocialIcons: css({
        color: "gray",
        marginBottom: "0.75rem",

        display: "flex",
        gap: "0.75rem",
    }),

    blogProfileCardItemText: css({
        color: "#aaa",
        fontWeight: 500,
        fontSize: "0.825rem",
    }),

    blogComment: css({
        fontWeight: 500,
        marginBottom: "1.25rem",
        marginTop: "1.25rem",
    }),

    blogLeaveReplyForm: css({
        marginTop: "1.25rem",
    }),

    blogLeaveReplyFormInput: css({
        fontSize: "small",
    }),
};

export default function BlogItem({ blog }) {
    return (
        <Container className="p-5">
            <Row>
                <Col xs={{ order: 2, span: 12 }} lg={{ order: 1, span: 8 }}>
                    <BlogCard {...blog} />
                    <ProfileCard />
                    <BlogComments />
                    <BlogLeaveReplyForm />
                </Col>
                <Col xs={{ order: 1, span: 12 }} lg={{ order: 2, span: 4 }}>
                    <BlogSidebar />
                </Col>
            </Row>
        </Container>
    );
}

function BlogCard({ title, author, date, comments, img, content, tags }) {
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

                <Card.Text
                    css={styles.blogCardMetaData}
                    className="border-top pt-2"
                >
                    <small>
                        <i className="fa-solid fa-tags mr-2" />
                        {tags.map((tag) => tag).join(", ")}
                    </small>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

function ProfileCard() {
    const imgPxSize = 94;
    const name = "Jane Smith";
    const img = "/images/testimonials/img-2.jpg";
    const withShadow = true;
    const text =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eos possimus consequuntur corporis, fugiat atque ut facere quod adipisci assumenda.";

    return (
        <Card
            className={`border-top border-bottom-0 border-left-0 border-right-0 px-3 ${
                withShadow && "shadow-sm"
            }`}
            css={styles.blogProfileCardGridItem}
        >
            <Card.Body
                className="d-flex px-4"
                css={styles.blogProfileCardGridItemContainer}
            >
                <img
                    src={img}
                    alt={name}
                    className="d-block rounded-circle normalized-image align-self-center"
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
                    <p css={styles.blogProfileCardItemName}>{name}</p>
                    <div
                        className="mt-1 mb-2"
                        css={styles.blogProfileCardItemSocialIcons}
                    >
                        <i className="fa-brands fa-twitter" />
                        <i className="fa-brands fa-facebook" />
                        <i className="fa-brands fa-instagram" />
                    </div>
                    <em css={styles.blogProfileCardItemText}>{text}</em>
                </div>
            </Card.Body>
        </Card>
    );
}

function BlogComments() {
    //
    // will be handled differently on full stack (each reply to a comment will add a dynamic insertion // adding a padding to its left)
    //
    return (
        <div className="overflow-auto">
            <h5 css={styles.blogComment}>8 Comments</h5>
            <div>
                <BlogComment {...blogComment} />
            </div>
            <div>
                <BlogComment {...blogComment} />
                <div className="pl-4">
                    <BlogComment {...blogComment} />
                </div>
                <div className="pl-5">
                    <BlogComment {...blogComment} />
                </div>
            </div>
            <div>
                <BlogComment {...blogComment} />
            </div>
        </div>
    );
}

function BlogLeaveReplyForm() {
    return (
        <Form
            className="p-4 shadow-sm border border-bottom-0"
            css={styles.blogLeaveReplyForm}
        >
            <h5 className="font-weight-bold">Leave a Reply</h5>
            <small className="d-block mt-2 mb-3">
                Your email address will not be published. Required fields are
                marked *
            </small>
            <Row>
                <Form.Group as={Col} controlId="name" className="mb-3">
                    <Form.Control
                        placeholder="Your Name*"
                        css={styles.blogLeaveReplyFormInput}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="email" className="mb-3">
                    <Form.Control
                        type="email"
                        placeholder="Your Email*"
                        css={styles.blogLeaveReplyFormInput}
                    />
                </Form.Group>
            </Row>
            <Form.Group controlId="subject" className="mb-3">
                <Form.Control
                    placeholder="Your Website"
                    css={styles.blogLeaveReplyFormInput}
                />
            </Form.Group>
            <Form.Group controlId="message" className="mb-3">
                <Form.Control
                    as="textarea"
                    placeholder="Your Comment*"
                    rows={3}
                    css={styles.blogLeaveReplyFormInput}
                />
            </Form.Group>
            <Button
                className="d-block accent-button"
                variant="dark"
                type="submit"
            >
                Send Message
            </Button>
        </Form>
    );
}
