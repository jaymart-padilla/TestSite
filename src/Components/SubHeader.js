/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = css`
  .sub-header {
    position: relative;
    text-transform: uppercase;
    font-weight: bold;
  }

  .sub-header::after {
    content: "";
    position: absolute;
    bottom: -0.7rem;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    width: 3.5ch;
    height: 0.2rem;
    background-color: var(--accent-color);
  }
`;

export default function SubHeader({ title }) {
  return (
    <h3 className="text-center mb-5" css={styles}>
      <span className="sub-header">{title}</span>
    </h3>
  );
}
