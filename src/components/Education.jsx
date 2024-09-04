import PortfolioDetails from "../PortfolioDetails.json";
import { transformText } from "../helpers/Helpers";
export default function Education() {
  const education = PortfolioDetails.sections.education.content;
  return (
    <section className="education">
      {/* <h2>Education</h2> */}
      <p className="section-description">
        Learning, growth, challenges, exploration, and networking
      </p>
      <span className="separator"></span>
      <div className="education-card">
        <div className="image-container">
          <img
            className="banner-image"
            src={education[0].bannerImage}
            alt="education"
          />
          <span className="image-caption">{education[0].subTitle}</span>
        </div>
        <div className="education-card-body">
          <h2 className="title">
            {education[0].title}
            <p>{education[0].date}</p>
          </h2>
          {/* <p>{education[0].subTitle}</p> */}
          <p>{transformText(education[0].about)}</p>
        </div>
      </div>
    </section>
  );
}
