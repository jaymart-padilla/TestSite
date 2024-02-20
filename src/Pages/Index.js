import Banner from "../Components/Banner";
import CardGrid from "../Components/CardGrid";
import Clients from "../Components/Clients";
import Gallery from "../Components/Gallery";
import Slider from "../Components/Slider";
import { services } from "../config/dummy-data";

export default function Index() {
  return (
    <div className="flex-grow-1">
      <Slider />
      <Banner />
      <CardGrid cardItems={services} />
      <Gallery />
      <Clients />
    </div>
  );
}
