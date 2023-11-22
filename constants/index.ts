// Skills Images

import html from "../public/images/skills/html.png";
import css from "../public/images/skills/css.png";
import javascript from "../public/images/skills/javascript.png";
import typescript from "../public/images/skills/typescript.png";
import reactjs from "../public/images/skills/reactjs.png";
import nextjs from "../public/images/skills/nextjs.png";
import firebase from "../public/images/skills/firebase.webp";
import chakra from "../public/images/skills/chakra.png";
import mui from "../public/images/skills/mui.png";
import ant from "../public/images/skills/ant.png";
import git from "../public/images/skills/git.png";
import tailwind from "../public/images/skills/tailwind.png";
import redux from "../public/images/skills/redux.png";
import figma from "../public/images/skills/figma.png";
import api from "../public/images/skills/api.png";
import github from "../public/images/skills/github.png";

// Project Images

import carent from "../public/images/projects/carent.png";
import bitcoin from "../public/images/projects/bitcoin.png";
import google from "../public/images/projects/google.png";
import hoobank from "../public/images/projects/hoobank.png";
import metaverse from "../public/images/projects/metaverse.png";
import mkbhd from "../public/images/projects/mkbhd.png";
import nike from "../public/images/projects/nike.png";
import restaurant from "../public/images/projects/resturant.png";
import youtube from "../public/images/projects/youtube.png";
import fitbitLogo from "../public/images/company/fitbit.jpeg";
import blueBottleLogo from "../public/images/company/blue-bottle.jpeg";

export const cardNames = [
  { id: 1, title: "Frontend Developer" },
  { id: 2, title: "JavaScript Developer" },
  { id: 3, title: "TypeScript Developer" },
  { id: 4, title: "React JS Developer" },
  { id: 5, title: "Next JS Developer" },
];

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const techSkills = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "React Redux",
    icon: redux,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "API",
    icon: api,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Chakra UI",
    icon: chakra,
  },
  {
    name: "Ant Design",
    icon: ant,
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Danny proved me wrong.",
    name: "Anne leya",
    designation: "Tech Lead",
    company: "Fitbit",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Danny does.",
    name: "William Malachy",
    designation: "Mentor",
    company: "Fitbit",
  },
  {
    testimonial:
      "After Danny optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "David Williams",
    designation: "Program Coordinator",
    company: "Blue Bottle Coffee",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers. Embarking on the road of innovation, my rent car website redefines convenience. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "next js",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
    ],
    image: carent,
    source_code_link: "https://github.com/amenyenudaniel/Carent",
    live_demo: "https://carhub-git-master-amenyenudaniel.vercel.app/",
  },

  {
    name: "Youtube Clone",
    description:
      "Presenting my YouTube clone: a React and Material-UI marvel. I recreated YouTube's essence—responsive design, video playback, and interactive elements—showcasing my UI/UX and front-end skills effectively. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/amenyenudaniel/Youtube-Clone",
    live_demo: "https://youtube-clone-website.vercel.app/",
  },
  {
    name: "Gericht Restaurant",
    description:
      "Indulge your taste buds in a culinary journey through my Gericht restaurant website. Capturing flavors and ambiance, I've crafted a virtual dining experience using the React JS library.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],

    image: restaurant,
    source_code_link: "https://github.com/amenyenudaniel/Restaurant-Website",
    live_demo: "https://restaurant-website-livid.vercel.app/",
  },
  {
    name: "Nike Clone",
    description:
      "Crafted in homage to Nike's dynamic appeal, my website clone encapsulates the brand's energy and innovation. I've mirrored Nike's essence and strive to amplify user engagement.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nike,
    source_code_link: "https://github.com/amenyenudaniel/Nike-Clone",
    live_demo: "https://nike-clone-git-master-amenyenudaniel.vercel.app/",
  },

  {
    name: "MKBHD Web Clone",
    description:
      "Experience the essence of MKBHD's tech world through my MKHHD clone Web Application. Dive into tech elegance with my MKBHD website clone. Immerse in sleek design and content using React JS",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: mkbhd,
    source_code_link: "https://github.com/amenyenudaniel/MKBHD-clone",
    live_demo: "https://mkbhd-clone-web.vercel.app/",
  },
  {
    name: "Metaverse",
    description:
      "My Metaverse website. Socialize seamlessly, and craft infinite virtual realms. Step into the future of interaction, where imagination knows no bounds. Join us and shape the Metaverse phenomenon today with this Metaverse crafted website.",
    tags: [
      {
        name: "react js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "next js",
        color: "blue-text-gradient",
      },
    ],
    image: metaverse,
    source_code_link: "https://github.com/amenyenudaniel/MetaVerse",
    live_demo: "https://metaverse-git-master-amenyenudaniel.vercel.app/",
  },

  {
    name: "Hoobank",
    description:
      "Where your financial aspirations come to life. With secure and user-friendly online banking and a commitment to your financial well-being, we're your partner on the path to prosperity. Join us in redefining banking convenience and excellence.",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: hoobank,
    source_code_link: "https://github.com/amenyenudaniel/Project-Hoobank",
    live_demo: "https://hoobank-web-navy.vercel.app/",
  },
  {
    name: "Crypto Bitcoin",
    description:
      "Navigate the world of cryptocurrency effortlessly with my Bitcoin app. Seamlessly track prices, manage your portfolio, and stay updated on market trends. Built with user-centric design and advanced coding, it offers a secure and streamlined experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: bitcoin,
    source_code_link: "https://github.com/amenyenudaniel/Crypto",
    live_demo: "https://crypto-web-xi.vercel.app/",
  },

  {
    name: "Google Store Clone",
    description:
      "Immerse yourself in the world of innovation with my meticulously crafted Google Store clone. Capturing the essence of the original, I've recreated the user-friendly interface using React JS. Browse an array of cutting-edge products at my google store clone.",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: google,
    source_code_link: "https://github.com/amenyenudaniel/Google-Store_clone",
    live_demo: "https://google-store-clone-web.vercel.app/",
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Fitbit(now part of Google)",
    icon: fitbitLogo,
    iconBg: "#383E56",
    date: "May 2022 - October 2023",
    points: [
      "Spearheaded the integration of UI/UX designs into responsive web applications, ensuring seamless user experiences.",
      "Collaborated with cross-functional teams in agile development cycles, contributing to the timely delivery of high-quality features.",
      "Utilized React.js and cutting-edge technologies to build modular and scalable frontend components.",
      "Conducted comprehensive testing of frontend components, identifying and addressing bugs and performance issues.",
      "Actively participated in internal training sessions, workshops, and conferences to stay current with emerging technologies and best practices.",
      "Thrived in Fitbit's culture of innovation, collaboration, and a passion for health and wellness.",
      "Successfully leveraged remote work flexibility, contributing to a diverse and inclusive workforce.",
    ],
  },

  {
    title: "Frontend Developer",
    company_name: "Blue Bottle Coffee",
    icon: blueBottleLogo,
    iconBg: "#383E56",
    date: "January 2020 - April 2022",
    points: [
      "Led the development and deployment of a new e-commerce platform, enhancing the online shopping experience for customers.",
      "Implemented responsive and user-friendly interfaces using React.js, ensuring optimal performance across various devices.",
      "Collaborated closely with UI/UX designers to translate design concepts into functional and aesthetically pleasing web applications.",
      "Contributed to the optimization of website speed and performance, resulting in a 15% improvement in page load times.",
      "Actively participated in sprint planning, daily stand-ups, and code reviews, fostering a collaborative and agile development environment.",
      "Introduced and maintained a comprehensive testing strategy, reducing the number of post-release issues by 30%",
      "Embraced the dynamic and creative culture at Blue Bottle Coffee, delivering solutions that align with the brand's identity and values.",
    ],
  },
];

export { techSkills, testimonials, projects, experiences };
