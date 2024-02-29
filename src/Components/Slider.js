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
        <Carousel
            css={styles.slider}
            prevLabel=""
            nextLabel=""
            indicators={false}
        >
            {sliderItems.map((sliderItem, index) => {
                const { img, title, text } = sliderItem;
                return (
                    <Carousel.Item key={index}>
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
        </Carousel>
    );
}
