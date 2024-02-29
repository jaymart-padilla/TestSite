/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Carousel, Card, Button } from "react-bootstrap";

const styles = {
    slider: css({
        "& img": {
            width: "100%",
            maxHeight: "65vh",
            height: "65vh",
            objectFit: "cover",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
        },

        ".carousel-control-prev, .carousel-control-next": {
            border: "none",
            background: "transparent",
        },
    }),

    sliderCard: css({
        width: "70%",
        margin: "0 auto",
        backgroundColor: "#00000099",
        borderTop: "0.25rem solid var(--accent-color)",
        borderBottom: "none",
        borderLeft: "none",
        borderRight: "none",
        boxShadow: "none",
        fontSize: "small",

        "@media (max-width: 768px)": {
            width: "100%",
        },
    }),
};

const sliderItems = [
    {
        img: "/images/slider/img-1.jpg",
        title: "Card title",
        text: "This card has supporting text below as a natural lead-in to additional content.",
    },
    {
        img: "/images/slider/img-2.jpg",
        title: "Card title",
        text: "This card has supporting text below as a natural lead-in to additional content.",
    },
];

export default function Slider() {
    return (
        <div
            id="indexMainSlider"
            className="carousel slide"
            data-ride="carousel"
            data-interval="4000"
            css={styles.slider}
        >
            <div className="carousel-inner">
                {sliderItems.map((sliderItem, index) => {
                    const { img, title, text } = sliderItem;
                    return (
                        <Carousel.Item
                            key={index}
                            className={index === 1 && "active"}
                        >
                            <img src={img} alt={title} />
                            <Carousel.Caption>
                                <Card
                                    className="text-center"
                                    css={styles.sliderCard}
                                >
                                    <Card.Body>
                                        <Card.Title>{title}</Card.Title>
                                        <Card.Text>{text}</Card.Text>
                                        <Button
                                            variant="outline-success"
                                            size="sm"
                                            className="accent-button"
                                        >
                                            Read More
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-target="#indexMainSlider"
                data-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-target="#indexMainSlider"
                data-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
            </button>
        </div>
    );
}
