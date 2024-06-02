import { useEffect, useState } from "react";
import "./App.css";
import "./main.css";
import PortfolioDetails from "./PortfolioDetails.js";
import DeveloperFooter from "./components/developerFooter.jsx";
export default function App() {
  const [wholeLoaded, setWholeLoaded] = useState(false);
  const sortedPortfolioDetails = sortObjectByKeyAndConvertToArray(
    PortfolioDetails,
    "sequence"
  );

  useEffect(() => {
    const onPageLoad = () => {
      setWholeLoaded(true);
    };
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, [wholeLoaded]);

  return (
    <main className="main">
      <div
        className={`loader-container stickers ${wholeLoaded ? "hidden" : ""}`}
      >
        <span className="loader-text sticker">fetching...</span>
      </div>
      <section className="center-container">
        <div className="cool-container">
          <div className="cool-body">
            <section className="about">
              <div className="my-image">
                <div className="my-image-container">
                  <img
                    src="/assets/images/profile-image.jpg"
                    alt="profile"
                    width={100}
                    height={100}
                    className=""
                  />
                </div>
              </div>
              <div className="my-name">
                <h1 className="title">Ankit Singh Chauhan</h1>
                <h4 className="sub-title">AVAILABLE FOR HIRE</h4>
              </div>
              <div className="my-text">
                <p>
                  Self taught web developer with a passion for learning new web
                  technologies. Constantly looking to develop my skills while
                  also growing professionally.
                </p>
              </div>
              <div className="my-links">
                <DeveloperFooter />
              </div>
            </section>
            <div className="expandable-sections">
              {sortedPortfolioDetails.map((value) => (
                <ExpandSection values={value[1]} key={value[0]} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const ExpandSection = ({ values }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className={`expand-section ${expanded ? "expanded" : ""}`}>
      <div className="section-header" onClick={() => setExpanded(!expanded)}>
        <h1>{values.header}</h1>
        <span className="icon">
          <img
            src="/assets/svg-icons/plus.svg"
            alt="icon"
            className="svg icon black plus"
            width={20}
            height={20}
          />
          <img
            src="/assets/svg-icons/minus.svg"
            alt="icon"
            className="svg icon black minus"
            width={20}
            height={20}
          />
        </span>
      </div>
      <div className="wrapper">
        <div className="inside-wrapper">
          <div className="section-body">
            {values.description && (
              <p className="padded">{transformText(values.description)}</p>
            )}
            {values.content &&
              values.content.map((item, index) => (
                <>
                  {item.type === "stickers" && (
                    <div key={index} className="stickers padded">
                      {item.items &&
                        item.items.map((sticker, stickerIndex) => (
                          <div className="sticker" key={stickerIndex}>
                            {sticker.icon && (
                              <img
                                src={sticker.icon}
                                alt={sticker.text + "-icon"}
                                className="svg icon black"
                                height={15}
                              />
                            )}
                            <span className="text">{sticker.text}</span>
                          </div>
                        ))}
                    </div>
                  )}
                  {item.subTitle && (
                    <div className="padded" key={index}>
                      <div className="title-with-year">
                        <div className="left-side">
                          <h2 className="title">{item.title}</h2>
                          <h4 className="sub-title">{item.subTitle}</h4>
                        </div>
                        <div className="right-side">
                          <h4 className="sub-title year">{item.date}</h4>
                        </div>
                      </div>
                      <div className="text-block">
                        {transformText(item.about)}
                      </div>
                    </div>
                  )}
                  {item.content &&
                    item.content.map((subItem, subIndex) => {
                      if (subItem.type === "text") {
                        return (
                          <p key={subIndex} className="padded">
                            {subItem.body}
                          </p>
                        );
                      } else if (subItem.type === "full-image") {
                        return (
                          <div key={subIndex} className="full-image">
                            <img src={subItem.src} alt="" />
                            <span className="img-caption">
                              {subItem.caption}
                            </span>
                          </div>
                        );
                      } else if (subItem.type === "ul-list") {
                        return (
                          <div key={subIndex} className="list padded">
                            <ul className="pretty-list">
                              {subItem.items &&
                                subItem.items.map((listItem, listIndex) => (
                                  <li key={listIndex}>
                                    <span className="list-bullet">
                                      <img
                                        src="/assets/svg-icons/asterisk-circle-fill.svg"
                                        alt="icon"
                                        width={17}
                                        height={17}
                                        className="svg icon black"
                                      />
                                    </span>
                                    <span className="list-text">
                                      {transformText(listItem)}
                                    </span>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        );
                      }
                      return null; // In case the item type is not recognized
                    })}
                </>
              ))}
          </div>
          <div
            className="section-footer"
            onClick={() => setExpanded(!expanded)}
          >
            {/* <span className="footer-text">Collapse</span> */}
            <span className="icon">
              <img
                src="/assets/svg-icons/chevron-up.svg"
                alt="icon"
                width={20}
                height={20}
                className="svg icon black"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const transformText = (inputString) => {
  const parts = inputString.split(/(@[^@]+@[^@]+@)/g).filter(Boolean);
  return (
    <span>
      {parts.map((part, index) => {
        if (part.startsWith("@") && part.endsWith("@")) {
          const [text, href] = part.slice(1, -1).split("@");
          return (
            <a
              key={index}
              href={href}
              target="_blank"
              className="inline-link"
              rel="noreferrer"
            >
              {text}
            </a>
          );
        }
        const subParts = part.split(/(\*[^*]+\*)/g).filter(Boolean);
        return subParts.map((subPart, subIndex) => {
          if (subPart.startsWith("*") && subPart.endsWith("*")) {
            return (
              <span key={subIndex} className="highlighted">
                {subPart.slice(1, -1)}
              </span>
            );
          }
          return subPart;
        });
      })}
    </span>
  );
};

const sortObjectByKeyAndConvertToArray = (obj, key) => {
  const array = Object.entries(obj);
  array.sort((a, b) => a[1][key] - b[1][key]);
  return array;
};
