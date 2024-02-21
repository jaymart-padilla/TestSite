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
import { paths } from "./config/paths";
import "./assets/css/app.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<IndexLayout />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route path={paths.about.url} element={<About />} />
        <Route path={paths.team.url} element={<Team />} />
        <Route path={paths.testimonials.url} element={<Testimonials />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
