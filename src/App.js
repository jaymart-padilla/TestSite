import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import IndexLayout from "./Layouts/IndexLayout";
import Index from "./Pages/Index";
import About from "./Pages/About";
import Team from "./Pages/Team";
import ErrorPage from "./Pages/ErrorPage";
import { paths } from "./config/paths";
import "./assets/css/app.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    // using string templates creates an error on routes for some reason
    <Route path="/" element={<IndexLayout />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route path={paths.about.url} element={<About />} />
        <Route path={paths.team.url} element={<Team />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
