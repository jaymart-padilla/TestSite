import Footer from "../Components/Footer";
import TopNav from "../Components/TopNav";
import Banner from "../Components/Banner";
import CardGrid from "../Components/CardGrid";
import Clients from "../Components/Clients";
import Gallery from "../Components/Gallery";
import Slider from "../Components/Slider";

const cardItems = [
  {
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet.",
    img: "/images/card-grid/cat.svg",
  },
  {
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet.",
    img: "/images/card-grid/dog.svg",
  },
  {
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet.",
    img: "/images/card-grid/luv.svg",
  },
  {
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet.",
    img: "/images/card-grid/snow.svg",
  },
  {
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet.",
    img: "/images/card-grid/usr.svg",
  },
  {
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet.",
    img: "/images/card-grid/wmn.svg",
  },
];

export default function Index() {
  return (
    <div className="vh-100 d-flex flex-column">
      <TopNav />
      <div className="flex-grow-1">
        <Slider />
        <Banner />
        <CardGrid cardItems={cardItems} />
        <Gallery />
        <Clients />
      </div>
      <Footer />
    </div>
  );
}
