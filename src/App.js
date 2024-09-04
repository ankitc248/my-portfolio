import React, { Suspense } from "react";
import "./css/main.css";
import PortfolioDetails from "./PortfolioDetails.json";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
const ProjectCards = React.lazy(() => import("./components/ProjectCards.jsx"));
const About = React.lazy(() => import("./components/About.jsx"));
const NotFound = React.lazy(() => import("./components/NotFound.jsx"));
const Work = React.lazy(() => import("./components/Work.jsx"));
const Education = React.lazy(() => import("./components/Education.jsx"));
// Main App Component
export default function App() {
  return (
    <main className="main">
      <Router>
        <section className="center-container">
          <Navbar items={[]} />
          <div className="cool-container">
            <div className="cool-body">
              <Suspense>
                <Routes>
                  <Route path="/" element={<Navigate to="/about" replace />} />
                  <Route
                    path="/about"
                    element={<About hero={PortfolioDetails.hero} />}
                  />
                  <Route path="/projects" element={<ProjectCards />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </div>
          </div>
        </section>
      </Router>
    </main>
  );
}
