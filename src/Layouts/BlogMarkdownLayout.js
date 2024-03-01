/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container } from "react-bootstrap";
import Markdown from "markdown-to-jsx";

const styles = {
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

//
//  children prop must be a `string/text` in `Markdown` component
//

export default function BlogMarkdownLayout({
    children,
    overrides,
    className = "",
    ...props
}) {
    return (
        <Markdown
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
                    ...overrides,
                },
            }}
            {...props}
            className={className}
        >
            {children}
        </Markdown>
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
