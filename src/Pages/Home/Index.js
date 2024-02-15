import Footer from "../../Components/Footer";
import TopNav from "../../Components/TopNav";
import Banner from "./Banner";
import CardGrid from "./CardGrid";
import Clients from "./Clients";
import Gallery from "./Gallery";
import Slider from "./Slider";

export default function Index() {
  return (
    <div className="vh-100 d-flex flex-column">
      <div>
        <TopNav />
      </div>
      <div className="flex-grow-1">
        <Slider />
        <Banner />
        <CardGrid />
        <Gallery />
        <Clients />
      </div>
      <Footer />
    </div>
  );
}
