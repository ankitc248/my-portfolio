// Utility functions
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

export { sortObjectByKeyAndConvertToArray, transformText };
