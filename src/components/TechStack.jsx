import {
  siHtml5,
  siCss3,
  siJavascript,
  siReact,
  siTailwindcss,
  siVuedotjs,
  siNextdotjs,
  siNuxtdotjs,
  siSupabase,
} from "simple-icons";
export default function TechStack() {
  const icons = [
    siHtml5,
    siCss3,
    siTailwindcss,
    siJavascript,
    siReact,
    siVuedotjs,
    siSupabase,
    siNextdotjs,
    siNuxtdotjs
  ];
  return (
    <div className="tech-stack">
      <h1>Tech Stack</h1>
      {/* <p>Some of the software and technologies I use on a daily basis</p> */}
      <span className="separator"></span>
      <div className="tech-stack-items">
        {icons.map((icon, index) => (
          <div
            className="tech-stack-item"
            key={icon.title}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={"#" + icon.hex}
                viewBox="0 0 24 24"
              >
                <path d={icon.path} />
              </svg>
            </div>
            <span className="tech-name">{icon.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
