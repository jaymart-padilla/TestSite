/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = {
  subHeader: css({
    position: "relative",
    textTransform: "uppercase",
    fontWeight: "bold",

    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-0.75rem",
      left: "50%",
      right: "50%",
      transform: "translateX(-50%)",
      width: "3.5ch",
      height: "0.25rem",
      backgroundColor: "var(--accent-color)",
    },
  }),
};

export default function SubHeader({ title }) {
  return (
    <h3 className="text-center mb-5" css={styles.subHeader}>
      {title}
    </h3>
  );
}
