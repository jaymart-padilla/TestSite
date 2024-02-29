/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container } from "react-bootstrap";

const styles = {
    banner: css({
        gap: "1.5rem",
        padding: "2.75rem 0rem",
        fontSize: "0.9rem",

        "@media (max-width: 576px)": {
            padding: "2.75rem 4rem",
        },
    }),

    bannerChild: css({
        width: "100%",
    }),

    bannerTitle: css({
        fontSize: "2.125rem",
        marginBottom: "1rem",
    }),

    bannerSubtitle: css({
        fontWeight: 500,
    }),
};

export default function Banner() {
    return (
        <Container
            className="d-flex flex-md-row flex-column justify-content-center text-dark"
            css={styles.banner}
        >
            <div css={styles.bannerChild}>
                <h2
                    className="text-uppercase font-weight-bold"
                    css={styles.bannerTitle}
                >
                    Eum ipsam laborum deleniti velitena
                </h2>
                <p className="lead m-0" css={styles.bannerSubtitle}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat, eos quasi. Perferendis laudantium.
                </p>
            </div>
            <div css={styles.bannerChild}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas deserunt, minima unde culpa perspiciatis adipisci
                    dignissimos enim accusamus. Architecto accusantium sed,
                    perspiciatis quo in consequuntur?
                </p>
                <div
                    className="d-flex flex-column justify-content-center align-items-start py-3"
                    style={{ gap: "0.5rem" }}
                >
                    <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ gap: "1rem" }}
                    >
                        <i className="fa-solid fa-check-double accent-color" />
                        <p className="m-0">
                            Lorem ipsum dolor sit, amet consectetur adipisicing.
                        </p>
                    </div>
                    <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ gap: "1rem" }}
                    >
                        <i className="fa-solid fa-check-double accent-color" />
                        <p className="m-0">
                            Lorem ipsum dolor sit, amet consectetur adipisicing.
                        </p>
                    </div>
                    <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ gap: "1rem" }}
                    >
                        <i className="fa-solid fa-check-double accent-color" />
                        <p className="m-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsam incidunt nisi eligendi dolore fugiat.
                        </p>
                    </div>
                </div>
                <p className="font-italic m-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore, maiores laboriosam excepturi repellat velit esse?
                </p>
            </div>
        </Container>
    );
}
