import TopNav from "../Components/TopNav";
import Footer from "../Components/Footer";
import CardGrid from "../Components/CardGrid";
import TopBreadcrumbs from "../Components/TopBreadcrumbs";
import { paths } from "../config/paths";
import { team } from "../config/dummy-data";

export default function Team() {
  return (
    <div className="vh-100 d-flex flex-column">
      <TopNav />
      <TopBreadcrumbs
        links={[paths.home, paths.team]}
        activeLink={paths.team}
      />
      <div className="flex-grow-1">
        <CardGrid
          cardItems={team}
          title="Our Team"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sapiente consequatur tempore omnis rerum corporis mollitia accusantium odit ratione itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit."
          colSize={4}
          withShadow
          padded={false}
          imgHeight={280}
        />
      </div>
      <Footer />
    </div>
  );
}
