import PortfolioDetails from "../PortfolioDetails.json";
import { transformText } from "../helpers/Helpers";

export default function Work() {
  const workDetails = PortfolioDetails.sections.workExperience.content;
  return (
    <section className="work-section">
      <p className="section-description">
        {PortfolioDetails.sections.workExperience.description}
      </p>
      <span className="separator"></span>
      <div className="work-grid item-grid">
        {workDetails.map((work, index) => {
          const fullDate = work.fullDate.split("-");
          return (
            <div
              className="work-card"
              key={work.title}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="education-card-body header">
                <h2 className="title">{work.title}</h2>
                <p>{work.subTitle}</p>
                <div className="date-sticker">
                  <span className="start">{fullDate[0].trim()}</span>
                  <span className="middle-separator">
                    <span className="starter"></span>
                    <span className="ender"></span>
                  </span>
                  <span className="end">{fullDate[1].trim()}</span>
                </div>
              </div>
              <div className="image-container">
                <img
                  className="banner-image zoomable"
                  src={work.bannerImage}
                  alt="education"
                />
                <span className="image-caption">{work.bannerCaption}</span>
              </div>
              <div className="education-card-body body">
                {/* <p>{work.subTitle}</p> */}
                <p>{transformText(work.about)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
