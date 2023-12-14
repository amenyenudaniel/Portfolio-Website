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
import hngLogo from "../public/images/company/HNGLOGO.jpeg";
import filmjethub from "../public/images/company/filmjethub.png";

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
import cert1 from "../public/images/certificates/cert1.png";
import cert2 from "../public/images/certificates/cert2.jpeg";
import film from "../public/images/projects/filmje.png";

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

export const techSkills = [
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

export const testimonials = [
  {
    testimonial:
      "Exceptional frontend work! Danny at HNG Internship crafts stunning designs with precision, exceeding expectations consistently. A top-tier developer",
    name: "Chinaza Obiekwe",
    designation: "IT Project Manager at Compound",
    company: "HNG Internship",
  },
  {
    testimonial:
      "Impressive frontend prowess! Danny excels in HTML, CSS, and JS, TS, transforming concepts into user-friendly interfaces seamlessly. A highly recommended developer!",
    name: "Angel Daniels",
    designation: "Client",
    company: "Client",
  },
  {
    testimonial:
      "Outstanding at HNG Internship! Danny delivers clean, efficient code, elevating user experiences. A rare talent with both technical excellence and design flair",
    name: "Malachy Williams",
    designation: "Cloud DevOps Engineer",
    company: "HNG Internship",
  },
];

export const projects = [
  {
    name: "FilmJetHub",
    description:
      "Elevating Entertainment Accessibility. Stream and download a diverse array of movies and TV shows effortlessly. Our user-friendly platform ensures a seamless experience, making FilmJetHub your go-to destination for on-demand, high-quality entertainment.",
    tags: [
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },

      {
        name: "Next JS",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
    ],
    image: "/images/projects/filmje.png",
    source_code_link: "https://github.com/amenyenudaniel/FilmJetHub",
    live_demo: "https://film-jet-hub.vercel.app/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers. Embarking on the road of innovation, my rent car website redefines convenience. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },

      {
        name: "Next JS",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
    ],
    image: "/images/projects/carent.png",
    source_code_link: "https://github.com/amenyenudaniel/Carent",
    live_demo: "https://carhub-git-master-amenyenudaniel.vercel.app/",
  },

  {
    name: "Youtube Clone",
    description:
      "Presenting my YouTube clone: a React and Material-UI marvel. I recreated YouTube's essence—responsive design, video playback, and interactive elements—showcasing my UI/UX and front-end skills effectively. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
    ],
    image: "/images/projects/youtube.png",
    source_code_link: "https://github.com/amenyenudaniel/Youtube-Clone",
    live_demo: "https://youtube-clone-website.vercel.app/",
  },
  {
    name: "Gericht Restaurant",
    description:
      "Indulge your taste buds in a culinary journey through my Gericht restaurant website. Capturing flavors and ambiance, I've crafted a virtual dining experience using the React JS library.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },

      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],

    image: "/images/projects/resturant.png",
    source_code_link: "https://github.com/amenyenudaniel/Restaurant-Website",
    live_demo: "https://restaurant-website-livid.vercel.app/",
  },
  {
    name: "Nike Clone",
    description:
      "Crafted in homage to Nike's dynamic appeal, my website clone encapsulates the brand's energy and innovation. I've mirrored Nike's essence and strive to amplify user engagement.",
    tags: [
      {
        name: "Next JS",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/images/projects/nike.png",
    source_code_link: "https://github.com/amenyenudaniel/Nike-Clone",
    live_demo: "https://nike-clone-git-master-amenyenudaniel.vercel.app/",
  },

  {
    name: "MKBHD Web Clone",
    description:
      "Experience the essence of MKBHD's tech world through my MKHHD clone Web Application. Dive into tech elegance with my MKBHD website clone. Immerse in sleek design and content using React JS",
    tags: [
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: "/images/projects/mkbhd.png",
    source_code_link: "https://github.com/amenyenudaniel/MKBHD-clone",
    live_demo: "https://mkbhd-clone-web.vercel.app/",
  },
  {
    name: "Metaverse",
    description:
      "My Metaverse website. Socialize seamlessly, and craft infinite virtual realms. Step into the future of interaction, where imagination knows no bounds. Join us and shape the Metaverse phenomenon today with this Metaverse crafted website.",
    tags: [
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Next JS",
        color: "blue-text-gradient",
      },
    ],
    image: "/images/projects/metaverse.png",
    source_code_link: "https://github.com/amenyenudaniel/MetaVerse",
    live_demo: "https://metaverse-git-master-amenyenudaniel.vercel.app/",
  },

  {
    name: "Hoobank",
    description:
      "Where your financial aspirations come to life. With secure and user-friendly online banking and a commitment to your financial well-being, we're your partner on the path to prosperity. Join us in redefining banking convenience and excellence.",
    tags: [
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: "/images/projects/hoobank.png",
    source_code_link: "https://github.com/amenyenudaniel/Project-Hoobank",
    live_demo: "https://hoobank-web-navy.vercel.app/",
  },
  {
    name: "Crypto Bitcoin",
    description:
      "Navigate the world of cryptocurrency effortlessly with my Bitcoin app. Seamlessly track prices, manage your portfolio, and stay updated on market trends. Built with user-centric design and advanced coding, it offers a secure and streamlined experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },

      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: "/images/projects/bitcoin.png",
    source_code_link: "https://github.com/amenyenudaniel/Crypto",
    live_demo: "https://crypto-web-xi.vercel.app/",
  },

  {
    name: "Google Store Clone",
    description:
      "Immerse yourself in the world of innovation with my meticulously crafted Google Store clone. Capturing the essence of the original, I've recreated the user-friendly interface using React JS. Browse an array of cutting-edge products at my google store clone.",
    tags: [
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: "/images/projects/google.png",
    source_code_link: "https://github.com/amenyenudaniel/Google-Store_clone",
    live_demo: "https://google-store-clone-web.vercel.app/",
  },
];
export const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "HNG Company",
    icon: hngLogo,
    iconBg: "#383E56",
    date: "August 2023 - November 2023",
    points: [
      "Successfully competed and emerged as a finalist among 22,000 candidates during the HNG internship, a testament to my skills and dedication.",
      "Applied expertise in HTML, CSS, and JavaScript to contribute significantly to the development of intuitive and visually appealing user interfaces.",
      "Collaborated closely with a diverse team to translate design concepts into pixel-perfect and interactive websites, ensuring a seamless user experience.",
      "Utilized cutting-edge technologies, including React.js, to enhance the functionality and performance of web applications.",
      "Implemented version control using Git and GitHub, fostering a collaborative and organized development environment.",
      "Stayed abreast of industry trends and best practices, actively incorporating them into projects to ensure they met the highest standards.",
      "Demonstrated adaptability and problem-solving skills in the fast-paced and dynamic environment of the tech industry.",
    ],
  },

  {
    title: "CEO & Founder, FilmJetHub | Frontend Developer",
    company_name: "FilmJetHub",
    icon: filmjethub,
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
      "Pioneered the conceptualization, development, and launch of FilmJetHub, a leading online platform for streaming and downloading a vast library of TV shows, movies, and cartoons.",
      "Orchestrated end-to-end website development, applying advanced frontend development skills to create an intuitive and visually appealing user interface, ensuring an exceptional user experience.",
      "Spearheaded business development initiatives, establishing key partnerships with major film studios, content creators, and distributors, expanding the platform's content catalog.",
      "Implemented responsive design principles, enhancing cross-device accessibility and fostering a seamless streaming experience for users on various platforms, including desktops, tablets, and mobile devices.",
      "Engineered personalized user features, such as watchlists and recommendations, utilizing data-driven insights to enhance user retention and satisfaction.",
      "Implemented robust security measures to protect user data and ensure compliance with industry standards, establishing FilmJetHub as a trustworthy and secure entertainment platform.",
    ],
  },
];

export const services = [
  {
    title: "React JS Developer",
    icon: reactjs,
  },

  {
    title: "Next JS Developer",
    icon: nextjs,
  },
  {
    title: "TypeScript Developer",
    icon: typescript,
  },
  {
    title: "JavaScript Developer",
    icon: javascript,
  },
];

export const certificatesData = [
  {
    title: "Meta Frontend Developer Certificate",
    image: cert1,
    view: "/pdf/pdf-cert.pdf",
  },
  {
    title: "HNG Internship Finalist Certificate",
    image: cert2,
    view: "/images/certificates/cert2.jpeg",
  },
];
