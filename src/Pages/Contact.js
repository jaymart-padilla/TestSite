/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TopBreadcrumbs from "../Components/TopBreadcrumbs";
import { paths } from "../config/paths";
import ContactFormIndex from "../Components/ContactFormIndex";

const styles = {
    googleMapsIFrame: css({
        width: "100%",
        height: "450px",
        border: "none",
    }),
};

export default function Contact() {
    return (
        <div className="flex-grow-1">
            <TopBreadcrumbs
                links={[paths.contact, paths.contact]}
                activeLink={paths.contact}
            />
            <iframe
                loading="lazy"
                src="https://maps.google.com/maps?q=chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                css={styles.googleMapsIFrame}
            />
            <ContactFormIndex />
        </div>
    );
}
