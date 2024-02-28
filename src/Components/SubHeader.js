/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = {
  subHeader: css({
    position: "relative",
    textTransform: "uppercase",
    fontWeight: "bold",

    "&:after": {
      content: '""',
      position: "absolute",

      bottom: "-0.85rem",
      left: "50%",
      right: "50%",
      transform: "translateX(-50%)",
      width: "3.5ch",
      height: "0.175rem",
      backgroundColor: "var(--accent-color)",
    },
  }),
};

export default function SubHeader({ title, description = "" }) {
  return (
    <>
      <h3 className="text-center mb-4" css={styles.subHeader}>
        {title}
      </h3>
      {description && (
        <p className="text-center font-weight-light">{description}</p>
      )}
    </>
  );
}
