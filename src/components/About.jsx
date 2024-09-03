import { transformText } from "../helpers/Helpers";
import DeveloperFooter from "./DeveloperFooter";
import PropTypes from "prop-types";
import TechStack from "./TechStack";

const About = ({ hero }) => (
  <section>
    <div className="about">
      <div className="my-image">
        <div className="backgroud-spinner"></div>
        <div className="my-image-container">
          <img
            src={hero.profileImage}
            alt="profile"
            width={90}
            height={90}
            className="zoomable"
          />
        </div>
      </div>
      <div className="my-name">
        <h1 className="title">{hero.name}</h1>
        <div className="my-text">
          <p>{transformText(hero.aboutText)}</p>
        </div>
        <h2 className="sub-title">{transformText(hero.subTitle)}</h2>
        <div className="my-links">
          <DeveloperFooter />
        </div>
      </div>
    </div>
    <TechStack />
  </section>
);

About.propTypes = {
  hero: PropTypes.object.isRequired,
};
export default About;
