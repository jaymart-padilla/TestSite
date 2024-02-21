import TopBreadcrumbs from "../Components/TopBreadcrumbs";
import TestimonialCard from "../Components/TestimonialCard";
import { testimonials } from "../config/dummy-data";
import { paths } from "../config/paths";

export default function Testimonials() {
  return (
    <div className="flex-grow-1">
      <TopBreadcrumbs
        links={[paths.home, paths.testimonials]}
        activeLink={paths.testimonials}
      />

      <TestimonialCard testimonials={testimonials} withShadow />
    </div>
  );
}
