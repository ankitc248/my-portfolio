import { transformText } from "../helpers/Helpers";
import DeveloperFooter from "./DeveloperFooter";
import PropTypes from "prop-types";
import TechStack from "./TechStack";
import { Mail } from "lucide-react";
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
        <h1 className="title">
          Hi
          <span className="wave">👋</span>
          <span>, I'm Ankit</span>
        </h1>
        <div className="my-text">
          <p>{transformText(hero.aboutText)}</p>
        </div>
        {/* <h2 className="sub-title">{transformText(hero.subTitle)}</h2> */}
        <div className="email">
          <Mail size={16} /> <a href={`mailto:${hero.email}`}>{hero.email}</a>
        </div>
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
