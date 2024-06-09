const PortfolioDetails = {
  workExperience: {
    sequence: 2,
    header: "Work Experience",
    description: "",
    content: [
      {
        subTitle: "Private Equity Front Office (PEFO)",
        title: "Software Developer",
        date: "2023 - 2024",
        about:
          "Joined this company after 2 year of experience of working in web development. Got to work on many interesting integrations for their CRM software, ranging from a search solution for their help center to developing a MS teams application for their CRM.",
        content: [
          {
            type: "text",
            body: "Noteworthy tasks I accomplished in this role",
          },
          {
            type: "ul-list",
            items: [
              "Integrated a search solution with their help center using *SiteSearch360*. Had to come up with a new approach to allow seamless transition between different search results without loading the whole page. Also did the fine tuning of this solution to return the most accurate results",
              "Created a *MS Teams Message Extension* for their CRM. Learned to work with *Microsoft Azure* services to accomplish this task. Also had to create API endpoints on our server to replicate behaviour of Microsoft Bot Framework.",
              "Developed a *MS Teams Chatbot* right after the message extension. This involved working with *Microsoft Graph API* and also OpenAI models. Assisted a freelancer in training a *OpenAI* model with our CRM data. Then integrated the model with the chatbot to work using *NLP* instead of pre-defined queries.",
            ],
          },
          {
            type: "full-image",
            src: "/assets/images/message-extension.jpeg",
            caption: "Microsoft Teams Application",
          }
        ],
      },
      {
        subTitle: "Tukatech Private Ltd",
        title: "Web Developer",
        date: "2021 - 2023",
        about:
          "Started my web development journey with this company. Joined as a junior then got promoted after the senior web developer left. Had to take on a lot of new responibilities after his departure, which I did head on and got to work on a lot of interesting tasks.",
        content: [
          {
            type: "text",
            body: "Noteworthy tasks I accomplished in this role:",
          },
          {
            type: "ul-list",
            items: [
              "Created the website @customizegarments.com@https://customizegarments.com/@ from scratch to customize *3D models* of garments using the PHP framework Codeigniter. Made the frontend interface and implemented it using *Bootstrap* and custom CSS. Learned to work with *XHTML* files and *X3DOM* library to manipulate *3D models* of garments. Made the project database and handled all the domain operations with *GoDaddy*.",
            ],
          },
          {
            type: "full-image",
            src: "/assets/images/customize-garments-site.png",
            caption: "customizegarments.com",
          },
          {
            type: "ul-list",
            items: [
              "Managed the company's employee portal @tukagroup.com@https://tukagroup.com/@. Learned to do basic operations in AWS to maintain the access of various domains under them. Familiarized myself with Git commands to implement new changes in codebase of the website. Learned basic angular to handle and implement pagination on data retrieved from various APIs.",
              "Reworked @eclothes.com@https://eclothes.tukatech.com/@ to be more reponsive and good looking. Added many new features in this website like admin control center, better forms with vastly improved file handling, integration with the company's sister site @tukaweb.com@https://tukaweb.com/@ to track user subscription. Also developed a new feature to integrate the website with Shopify sites and APIs.",
            ],
          },
          {
            type: "full-image",
            src: "/assets/images/eclothes-site.png",
            caption: "eclothes.com",
          },
        ],
      },
    ],
  },
  technicalSkills: {
    sequence: 1,
    header: "Technical Skills",
    description: "",
    content: [
      {
        type: "stickers",
        items: [
          { text: "HTML", icon: "" },
          { text: "CSS", icon: "" },
          { text: "JavaScript", icon: "" },
          { text: "jQuery", icon: "" },
          { text: "ReactJS", icon: "" },
          { text: "MongoDB", icon: "" },
          { text: "PHP", icon: "" },
          { text: "MySQL", icon: "" },
          { text: "Git", icon: "" },
        ],
      },
    ],
  },
  education: {
    sequence: 4,
    header: "Education",
    description: "",
    content: [
      {
        subTitle: "Jaypee Institute of Information Technology",
        title: "Bachelor of Technology in CSE",
        date: "2016 - 2020",
        about:
          "Completed my graduation in Computer Science and Engineering from JIIT - 62, Noida with a *CGPA of 7.0*. Got to be around a lot of smart minds and experience different fields of technology. Tried my hand at many different fields and finally decided to pursue *Web Development*.",
        content: [
          {
            type: "text",
            body: "Noteworthy accomplishments made in college:",
          },
          {
            type: "ul-list",
            items: [
              "Published a research paper in *IEEE* on the topic of Fuzzy Logic based Crop Yield Prediction using Temperature and Rainfall parameters predicted through ARMA, SARIMA, and ARMAX models. This taught me the fundamentals of *Machine Learning* and the process of publishing a paper. You can find it @here@https://ieeexplore.ieee.org/document/8844901@.",
              "Made a website called *JIITHub* as a semester project. This was a repository that would provide students with a way to store and submit their assignments in an online portal. It also had *plagiarism detection* for the college faculty to check if the assignments are copied from each other.",
            ],
          }
        ],
      },
    ],
  },
  projects: {
    sequence: 3,
    header: "Projects",
    description:
      "I am always working on a project whenever I get the time. This helps me in exploring new ideas and learning new technologies. Currently most of my projects are related to JS Frameworks like *NodeJS*, *ReactJS* and just recently *NextJS*.",
    content: [
      {
        content: [
          {
            type: "text",
            body: "Some of the notable ones are listed below.",
          },
        ],
      },
      {
        subTitle: "A different take on a to-do list",
        title: "Sticky notes app",
        date: "ReactJS",
        about:
          "One of my starting projects in ReactJS. Took inspiration from to-do list app projects and put my own spin on it. You can view it  @here@https://sticky-notes-react-js.vercel.app@.",
        content: [
          {
            type: "full-image",
            src: "/assets/images/sticky-notes-app.png",
            caption: "Sticky notes app",
          },
          {
            type: "text",
            body: "This project taught me:",
          },
          {
            type: "ul-list",
            items: [
              "The basics of ReactJS. Improved my understanding of it's most used hooks.",
              "The ins and outs of *Framer motion* library and it's usage.",
              "Storing user information in the form of cookies and integrating them seamlessly with a React app.",
            ],
          }
        ],
      },
      {
        subTitle: "Using APIs to locate streams for media",
        title: "Streaming locator app",
        date: "ReactJS",
        about:
          "A more complex web app which incorporates multiple APIs to locate streams for any piece of media. You can view it  @here@https://streaming-locator.vercel.app@.",
        content: [
          {
            type: "full-image",
            src: "/assets/images/streaming-finder-app.png",
            caption: "Streams finder app",
          },
          {
            type: "text",
            body: "This project taught me:",
          },
          {
            type: "ul-list",
            items: [
              "Concept of debouncing and throttling. Used these to make the search more seamless and efficient.",
              "Working with multiple APIs to fetch data and manage their dependency on each other.",
              "Improved my approach to responsive design and user experience. This made the app experience more interesting for all devices.",
            ],
          },
        ],
      },
    ],
  },
};
export default PortfolioDetails;
