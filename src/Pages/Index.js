import Footer from "../Components/Footer";
import TopNav from "../Components/TopNav";
import Banner from "../Components/Banner";
import CardGrid from "../Components/CardGrid";
import Clients from "../Components/Clients";
import Gallery from "../Components/Gallery";
import Slider from "../Components/Slider";
import { cardItems } from "../config/dummy-data";

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
