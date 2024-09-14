import PortfolioDetails from "../PortfolioDetails.json";
import { transformText } from "../helpers/Helpers";
export default function Education() {
  const education = PortfolioDetails.sections.education.content;
  return (
    <section className="education">
      {/* <h2>Education</h2> */}
      <p className="section-description">
        {PortfolioDetails.sections.education.description}
      </p>
      <span className="separator"></span>
      <div className="education-card">
        <div className="education-card-body header">
          <h2 className="title">
            {education[0].title}
            <p>{education[0].subTitle}</p>
          </h2>
          <div className="date-sticker">
            <span className="start">
              {education[0].date.split("-")[0].trim()}
            </span>
            <span className="middle-separator">
              <span className="starter"></span>
              <span className="ender"></span>
            </span>
            <span className="end">
              {education[0].date.split("-")[1].trim()}
            </span>
          </div>
        </div>
        <div className="image-container">
          <img
            className="banner-image"
            src={education[0].bannerImage}
            alt="education"
          />
          <span className="image-caption">{education[0].subTitle}</span>
        </div>
        <div className="education-card-body">
          <p>{transformText(education[0].about)}</p>
        </div>
      </div>
    </section>
  );
}
