import PortfolioDetails from "../PortfolioDetails.json";
import { transformText } from "../helpers/Helpers";

export default function Work() {
  const workDetails = PortfolioDetails.sections.workExperience.content;
  return (
    <section className="work-section">
      <p className="section-description">
        Pursuit of purpose through effort and dedication
      </p>
      <span className="separator"></span>
      <div className="work-grid">
        <div className="timeline">
          <div className="timeline-filler"></div>
        </div>
        {workDetails.map((work, index) => (
          <>
            <div className="date-sticker">{work.fullDate}</div>
            <div
              className="work-card"
              key={work.title}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="image-container">
                <img
                  className="banner-image zoomable"
                  src={work.bannerImage}
                  alt="education"
                />
                <span className="image-caption">{work.bannerCaption}</span>
              </div>
              <div className="education-card-body">
                <h2 className="title">
                  {work.title}
                  <p>{work.subTitle}</p>
                </h2>
                {/* <p>{work.subTitle}</p> */}
                <p>{transformText(work.about)}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
