/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container } from "react-bootstrap";

const styles = css`
  .banner {
    gap: 1rem;
    padding: 2.75rem 4rem;
    font-size: 0.9rem;
  }

  .banner-child {
    width: 100%;
  }
`;

export default function Banner() {
  return (
    <div css={styles}>
      <Container className="d-flex flex-md-row flex-column justify-content-center banner">
        <div className="banner-child">
          <h3 className="text-uppercase">Lorem ipsum dolor sit amet.</h3>
          <p className="lead m-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
            consectetur a porro.
          </p>
        </div>
        <div className="banner-child">
          <p className="m-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            sapiente consequatur tempore omnis rerum corporis mollitia
            accusantium odit ratione itaque.
          </p>
          <div
            className="d-flex flex-column justify-content-center align-items-center py-3"
            style={{ gap: "1rem" }}
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
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </p>
            </div>
          </div>
          <p className="font-italic m-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
            consectetur a porro.
          </p>
        </div>
      </Container>
    </div>
  );
}
