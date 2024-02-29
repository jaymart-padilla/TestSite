import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import IndexLayout from "./Layouts/IndexLayout";
import ErrorPage from "./Pages/ErrorPage";
import Index from "./Pages/Index";
import About from "./Pages/About";
import Team from "./Pages/Team";
import Testimonials from "./Pages/Testimonials";
import Services from "./Pages/Services";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";
import BlogIndex from "./Pages/BlogIndex";
import BlogSingle from "./Pages/BlogSingle";
import { paths } from "./config/paths";
import "./assets/css/app.css";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<IndexLayout />} errorElement={<ErrorPage />}>
            <Route errorElement={<ErrorPage />}>
                <Route index element={<Index />} />
                <Route path={paths.about.url} element={<About />} />
                <Route path={paths.team.url} element={<Team />} />
                <Route
                    path={paths.testimonials.url}
                    element={<Testimonials />}
                />
                <Route path={paths.services.url} element={<Services />} />
                <Route path={paths.pricing.url} element={<Pricing />} />
                <Route path={paths.contact.url} element={<Contact />} />
                <Route path={paths.blog.url} element={<BlogIndex />} />
                <Route
                    path={paths.blog.url + "/:id"}
                    element={<BlogSingle />}
                />
            </Route>
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
