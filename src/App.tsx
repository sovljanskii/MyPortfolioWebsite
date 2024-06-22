import Header from "./views/templates/Header";
import Footer from "./views/templates/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./views/pages/HomePage";
import AboutMePage from "./views/pages/AboutMePage";
import MyCVPage from "./views/pages/MyCVPage";
import ProjectsPage from "./views/pages/ProjectsPage";
import ContactPage from "./views/pages/ContactPage";
export default function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <main className="h-full w-full">
          <section className="pt-[3rem] tablet:min-h-[90vh] tablet:pb-[150px] tablet:pb-[50px]">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-me" element={<AboutMePage />} />
              <Route path="/my-cv" element={<MyCVPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </section>
        </main>
        <Footer></Footer>
      </Router>
    </>
  );
}
