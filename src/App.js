import { useEffect, useState } from "react";
import "./css/main.css";
import "./css/light.css";
import PortfolioDetails from "./PortfolioDetails.json";
import DeveloperFooter from "./components/developerFooter.jsx";
export default function App() {
  const [wholeLoaded, setWholeLoaded] = useState(false);
  const [theme, setTheme] = useState("dark");
  const sortedPortfolioDetails = sortObjectByKeyAndConvertToArray(
    PortfolioDetails.sections,
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
    // const prefersLightMode = window.matchMedia("(prefers-color-scheme: light)");
    // if (prefersLightMode.matches) setTheme("light");
  }, [wholeLoaded]);

  return (
    <main className={`main ${theme}`}>
      <div
        className={`loader-container stickers ${wholeLoaded ? "hidden" : ""}`}
      >
        <span className="loader-text sticker">fetching...</span>
      </div>
      <section className="center-container">
        <div className="cool-container">
          <div className="cool-body">
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <img
                src="/assets/svg-icons/dark-theme.svg"
                alt="icon"
                width={20}
                height={20}
                className="svg icon black"
              />
            </button>
            <section className="about">
              <div className="my-image">
                <div className="my-image-container">
                  <img
                    src={PortfolioDetails.hero.profileImage}
                    alt="profile"
                    width={100}
                    height={100}
                    className=""
                  />
                </div>
              </div>
              <div className="my-name">
                <h1 className="title">{PortfolioDetails.hero.name}</h1>
                <h4 className="sub-title">
                  {transformText(PortfolioDetails.hero.subTitle)}
                </h4>
              </div>
              <div className="my-text">
                <p>{transformText(PortfolioDetails.hero.aboutText)}</p>
              </div>
              <div className="my-links">
                <DeveloperFooter />
              </div>
            </section>
            <div className="expandable-sections">
              {sortedPortfolioDetails.map((value) => (
                <ExpandSection
                  values={value[1]}
                  key={value[0]}
                  uniqueIdentifier={value[0]}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const ExpandSection = ({ values, uniqueIdentifier }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className={`expand-section ${expanded ? "expanded" : ""}`}>
      <button
        type="button"
        className="section-header"
        onClick={() => setExpanded(!expanded)}
      >
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
      </button>
      <div className="wrapper">
        <div className="inside-wrapper">
          <div className="section-body">
            {values.description && (
              <p className="padded" key={uniqueIdentifier + "_description"}>
                {transformText(values.description)}
              </p>
            )}
            {values.content &&
              values.content.map((item, index) => (
                <>
                  {item.type === "stickers" && (
                    <Stickers
                      values={item}
                      key={uniqueIdentifier + "_stickers_" + index}
                      uniqueIdentifier={uniqueIdentifier + "_stickers_" + index}
                    />
                  )}
                  {item.subTitle && (
                    <TitleWithYear
                      values={item}
                      key={uniqueIdentifier + "_title_" + index}
                    />
                  )}
                  {item.content &&
                    item.content.map((subItem, subIndex) => {
                      if (subItem.type === "text") {
                        return (
                          <p
                            key={
                              uniqueIdentifier +
                              "_" +
                              index +
                              "_subitem_text_" +
                              subIndex
                            }
                            className="padded"
                          >
                            {subItem.body}
                          </p>
                        );
                      } else if (subItem.type === "full-image") {
                        return (
                          <div
                            key={
                              uniqueIdentifier +
                              "_" +
                              index +
                              "_subitem_image_" +
                              subIndex
                            }
                            className="full-image"
                          >
                            <img src={subItem.src} alt="" />
                            <span className="img-caption">
                              {subItem.caption}
                            </span>
                          </div>
                        );
                      } else if (subItem.type === "ul-list") {
                        return (
                          <ULList
                            key={
                              uniqueIdentifier +
                              "_" +
                              index +
                              "_subitem_list_" +
                              subIndex
                            }
                            uniqueIdentifier={
                              uniqueIdentifier +
                              "_" +
                              index +
                              "_subitem_list_" +
                              subIndex
                            }
                            values={subItem}
                          />
                        );
                      }
                      return null; // In case the item type is not recognized
                    })}
                </>
              ))}
          </div>
          <button
            type="button"
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
          </button>
        </div>
      </div>
    </section>
  );
};

const TitleWithYear = ({ values, uniqueIdentifier }) => {
  return (
    <div className="padded">
      <div className="title-with-year">
        <div className="left-side">
          <h2 className="title">{values.title}</h2>
          <h4 className="sub-title">{values.subTitle}</h4>
        </div>
        <div className="right-side">
          <h4 className="sub-title year">{values.date}</h4>
        </div>
      </div>
      <div className="text-block">{transformText(values.about)}</div>
    </div>
  );
};

const Stickers = ({ values, uniqueIdentifier }) => {
  return (
    <div className="stickers padded">
      {values.items &&
        values.items.map((sticker, stickerIndex) => (
          <div
            className="sticker"
            key={uniqueIdentifier + "sticker_" + stickerIndex}
          >
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
  );
};

const ULList = ({ values, uniqueIdentifier }) => {
  return (
    <div className="list padded">
      <ul className="pretty-list">
        {values.items &&
          values.items.map((listItem, listIndex) => (
            <li key={uniqueIdentifier + "_" + listIndex}>
              <span className="list-bullet">
                <img
                  src="/assets/svg-icons/asterisk-circle-fill.svg"
                  alt="icon"
                  width={15}
                  height={15}
                  className="svg icon black"
                />
              </span>
              <span className="list-text">{transformText(listItem)}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

const sortObjectByKeyAndConvertToArray = (obj, key) => {
  const array = Object.entries(obj);
  array.sort((a, b) => a[1][key] - b[1][key]);
  return array;
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
