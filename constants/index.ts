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
import hngLogo from "../public/images/company/HNGLOGO.jpeg";

// Certificates

import meta from "../public/images/certificates/cert1.png";
import hng from "../public/images/certificates/cert2.jpeg";
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
    designation: "Client",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Danny does.",
    name: "William Malachy",
    designation: "Mentor",
    company: "Hng Internship",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Danny optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Chinaza Obiekwe",
    designation: "Program Coordinator",
    company: "HNG Internship",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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
];

const otherProjects = [
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
    title: "Frontend Developer Intern",
    company_name: "HNG Internship",
    icon: hngLogo,
    iconBg: "#383E56",
    date: "August 2023 - November 2023",
    points: [
      "Developed and maintained responsive web interfaces using HTML, CSS,JavaScript, TypeScript, React, and Next JS ensuring cross-browser compatibility and optimal performance",
      "Collaborated with a cross-functional team to translate design concepts into code, resulting in visually appealing and user-friendly websites",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Implemented efficient UI components using React and Next JS, improving page load times by 20%.",
      "Troubleshooted and resolved frontend issues, enhancing user experience and reducing error rates",
      "Participated in code reviews, maintaining high coding standards and best practices in the development process",
      "Worked on 10 number of real-world projects, gaining hands-on experience in frontend development best practices.",
    ],
  },
];

export const softSKills = [
  {
    title: "Effective Communication",
    content:
      "I excel in conveying technical concepts to both technical and non-technical stakeholders, fostering clear collaboration.",
  },
  {
    title: "Adaptability",
    content:
      "I am quick to embrace new technologies and methodologies, ensuring versatility in handling dynamic project requirements.",
  },
  {
    title: "Problem-Solving",
    content:
      "I am adept at identifying and resolving issues, employing a systematic approach to troubleshoot and optimize code.",
  },
  {
    title: "Attention to Detail",
    content:
      "I am meticulous in crafting clean, efficient, and maintainable code, prioritizing quality in every aspect of development.",
  },
  {
    title: "Team Collaboration",
    content:
      "I am a collaborative and supportive team member, contributing positively to group dynamics while respecting diverse perspectives.",
  },
];

export const certificatesData = [
  {
    title: "Meta Frontend Developer Certificates",
    content: "Coursera",
    image: meta,
    view: "pdf/pdf-cert.pdf",
  },

  {
    title: "HNG Finalist Certificate",
    content: "HNG Internship",
    image: hng,
    view: "/images/certificates/cert2.jpeg",
  },
];
export { techSkills, testimonials, projects, otherProjects, experiences };
