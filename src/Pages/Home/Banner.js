import { Container } from "react-bootstrap";
import "../../assets/css/banner.css";

export default function Banner() {
  return (
    <Container className="banner">
      <div className="banner-child">
        <h3 className="text-uppercase">Lorem ipsum dolor sit amet.</h3>
        <p className="lead">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
          consectetur a porro.
        </p>
      </div>
      <div className="banner-child">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          sapiente consequatur tempore omnis rerum corporis mollitia accusantium
          odit ratione itaque.
        </p>
        <div className="banner-bullet-container">
          <div className="banner-bullet">
            <i className="fa-solid fa-check-double banner-bullet-icon" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
          </div>
          <div className="banner-bullet">
            <i className="fa-solid fa-check-double banner-bullet-icon" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
          </div>
          <div className="banner-bullet">
            <i className="fa-solid fa-check-double banner-bullet-icon" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
          </div>
        </div>
        <p className="font-italic">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
          consectetur a porro.
        </p>
      </div>
    </Container>
  );
}
