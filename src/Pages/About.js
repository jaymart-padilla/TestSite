import TopNav from "../Components/TopNav";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import CardGrid from "../Components/CardGrid";
import Clients from "../Components/Clients";
import TopBreadcrumbs from "../Components/TopBreadcrumbs";
import Skills from "../Components/Skills";
import { paths } from "../config/paths";
import { team } from "../config/dummy-data";

export default function About() {
  return (
    <div className="vh-100 d-flex flex-column">
      <TopNav />
      <TopBreadcrumbs
        links={[paths.home, paths.about]}
        activeLink={paths.about}
      />
      <div className="flex-grow-1">
        <Banner />
        <CardGrid
          cardItems={team}
          title="Our Team"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sapiente consequatur tempore omnis rerum corporis mollitia accusantium odit ratione itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit."
          colSize={4}
          withShadow
          padded={false}
          imgHeight={280}
        />
        <Skills />
        <Clients />
      </div>
      <Footer />
    </div>
  );
}
