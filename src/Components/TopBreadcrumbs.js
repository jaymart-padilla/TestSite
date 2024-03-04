import { Breadcrumb, Container } from "react-bootstrap";

export default function TopBreadcrumbs({ links, activeLink }) {
    const maxLetters = 20;

    return (
        <Container fluid className="top-breadcrumbs">
            <Container className="d-flex align-items-center justify-content-between py-2 px-3">
                <h5 className="m-0">
                    <a
                        href={activeLink.url}
                        data-toggle="tooltip"
                        title={activeLink.text || ""}
                    >
                        {truncateText(activeLink.text, maxLetters)}
                    </a>
                </h5>
                <Breadcrumb>
                    {links.map((link, index) => (
                        <Breadcrumb.Item
                            key={index}
                            href={link.url}
                            active={link.url === activeLink.url}
                        >
                            {truncateText(link.text, maxLetters)}
                        </Breadcrumb.Item>
                    ))}
                </Breadcrumb>
            </Container>
            <style jsx global>
                {`
                    .top-breadcrumbs {
                        background-color: var(--accent-color);
                    }

                    .top-breadcrumbs .breadcrumb {
                        background-color: var(--accent-color);
                        margin-bottom: 0;
                    }

                    .top-breadcrumbs a,
                    .breadcrumb-item + .breadcrumb-item::before {
                        color: white;
                    }

                    .top-breadcrumbs .breadcrumb-item.active {
                        color: var(--light-muted);
                    }

                    .top-breadcrumbs ol.breadcrumb {
                        padding: 0.75rem 0;
                    }
                `}
            </style>
        </Container>
    );
}

function truncateText(text = "", length) {
    return text.length > length ? text.slice(0, length) + "..." : text;
}
