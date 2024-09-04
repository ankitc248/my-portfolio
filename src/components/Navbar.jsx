import { useState, useEffect } from "react";
import {
  BriefcaseBusiness,
  FlaskConical,
  User,
  GraduationCap,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navbarDetails = {
  about: ["About me", User],
  projects: ["Projects", FlaskConical],
  indicator: "Current",
  work: ["Work Experience", BriefcaseBusiness],
  education: ["Education", GraduationCap],
};

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const currentPathPart = currentPath.split("/")[1];

  const initialSection = (() => {
    if (currentPathPart && navbarDetails[currentPathPart]) {
      return Array.isArray(navbarDetails[currentPathPart]) &&
        navbarDetails[currentPathPart].length > 0
        ? navbarDetails[currentPathPart][0]
        : null;
    } else {
      return "404";
    }
  })();

  const [activeSection, setActiveSection] = useState("ASC");

  useEffect(() => {
    setActiveSection(initialSection);
  }, [initialSection]);
  return (
    <>
      <span className="mobile-indicator">{activeSection}</span>
      <nav className="navbar">
        <ul>
          {Object.entries(navbarDetails).map((link, index) => {
            const Icon = link[1][1];
            const title = link[1][0];
            return link[0] === "indicator" ? (
              <li className="middle-item active-section">{activeSection}</li>
            ) : (
              <li
                key={link[0] + "_" + index}
                className={`icon ${
                  currentPath === "/" + link[0] ? "active" : ""
                }`}
              >
                <Link
                  to={link[0]}
                  onMouseEnter={() => setActiveSection(title)}
                  onMouseLeave={() => setActiveSection(initialSection)}
                  aria-label={title}
                >
                  <Icon size={20} />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
