import TopNav from "../Components/TopNav";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import CardGrid from "../Components/CardGrid";
import Clients from "../Components/Clients";
import TopBreadcrumbs from "../Components/TopBreadcrumbs";
import Skills from "../Components/Skills";
import { paths } from "../config/paths";

const cardItems = [
  {
    title: "Walter White",
    img: "/images/team/img-1.jpg",
    footer: "Chief Executive Officer",
  },
  {
    title: "William Anderson",
    img: "/images/team/img-2.jpg",
    footer: "Product Manager",
  },
  {
    title: "Sarah Jhonson",
    img: "/images/team/img-3.jpg",
    footer: "CTO",
  },
  {
    title: "Amanda Jepson",
    img: "/images/team/img-4.jpg",
    footer: "Accountant",
  },
];

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
          cardItems={cardItems}
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
