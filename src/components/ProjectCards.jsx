import PortfolioDetails from "../PortfolioDetails.json";
import { ExternalLink, Github } from "lucide-react";
import Switch from "react-switch";
import { useState } from "react";

export default function ProjectCards() {
  const projectDetails = PortfolioDetails.sections.projects.content;
  const assignmentDetails = PortfolioDetails.sections.assignments.content;
  const projects = PortfolioDetails.sections.projects;
  const [showAssignments, setShowAssignments] = useState(false);
  return (
    <div className="project-section">
      <p>{projects.smallDescription}</p>
      <span className="separator"></span>
      <div className="show-assignments-control">
        Show Assignments
        <Switch
          onChange={() => setShowAssignments(!showAssignments)}
          checked={showAssignments}
          height={15}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          handleDiameter={8}
          offColor="#111"
          onColor="#EEE"
          onHandleColor="#111"
        />
      </div>
      <div className="projects-grid">
        {showAssignments &&
          assignmentDetails.map((project, index) => (
            <div
              className="project-card"
              key={project.title}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="image-container">
                <img
                  src={project.content[0].src}
                  alt="project"
                  loading="lazy"
                  style={{ width: "100%", height: "auto" }}
                />
                {/* <span className="image-caption">{project.title}</span> */}
              </div>
              <div className="project-card-body">
                <h3 className="title">{project.title}</h3>
                <p className="sub-title">{project.subTitle}</p>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <Github size={16} />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="external-link"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        {projectDetails.map((project, index) => (
          <div
            className="project-card"
            key={project.title}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="image-container">
              <img
                src={project.content[0].src}
                alt="project"
                loading="lazy"
                style={{ width: "100%", height: "auto" }}
              />
              {/* <span className="image-caption">{project.title}</span> */}
            </div>
            <div className="project-card-body">
              <h3 className="title">{project.title}</h3>
              <p className="sub-title">{project.subTitle}</p>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                  <Github size={16} />
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="external-link"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
