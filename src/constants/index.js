import {
  react,
  // backend,
  full,
  // creator,
  web,
  ux,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // carrent,
  scouts,
  vivagusta,
  // zenzest,
  // jobit,
  // tripguide,
  threejs,
  // comingsoon,
  jobsPortal,
  techProducts,
  // coverImage, // Use the named import here
} from "../assets";

import linkedin from '../assets/socials/linkedin.svg';
import github from '../assets/socials/github.svg';
import twitter from '../assets/socials/twitter.svg';
// import instagram from '../assets/socials/instagram.svg';

export const navLinks = [
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
];

export const letsConnectLink = {
  id: "contact",
  title: "Let's Connect",
  className: "contact",
};

export const socials = [
  {
    name: "linkedin",
    icon: linkedin,
    link: 'https://www.linkedin.com/in/nicholemcgrew/',
    contactP: 'Connect with me on LinkedIn',
  },
  {
    name: "github",
    icon: github,
    link: 'https://github.com/nicholemcgrew',
    contactP: 'Check out my projects on GitHub',
  },
  {
    name: "twitter",
    icon: twitter,
    link: 'https://twitter.com/nicholemcgrew',
    contactP: 'Follow me on Twitter',
  },
  // {
  //   name: "instagram",
  //   icon: instagram,
  //   link: 'https://www.instagram.com/insight.photos/',
  // },
  // {
  //   name: "cover",
  //   icon: coverImage, // Use the named import here
  // },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: full,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "UI/UX Designer",
    icon: ux,
  },
];

const skills = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "redux",
    icon: redux,
  },
];

const projects = [
  {
    name: "Cub Scouts",
    description: "An engaging landing page designed to introduce Cub Scouting to prospective members and their families. Discover the exciting world of Cub Scouting, learn about activities, and stay updated with upcoming events and activities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: scouts,
    links: {
      source_code: "https://github.com/nicholemcgrew/cub-scouts-365",
      source_deploy: "https://cub-scouts-pack-365.netlify.app"
    }
  },
  {
    name: "Tech Products",
    description: "Leveraging the power of Tailwind CSS to design and style a dynamic product list. With JavaScript, I implemented advanced filtering and seamless add-to-cart functionality, enhancing the user experience and delivering a polished e-commerce solution.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: techProducts,
    links: {
      source_code: "https://github.com/nicholemcgrew/product-filter",
      source_deploy: "https://magenta-sunshine-a1ec75.netlify.app/"
    }
  },
  {
    name: "React Jobs Portal",
    description: "Developed a dynamic and responsive job listing frontend application using React. Features include fetching job listings from a external API, a component-based architecture, robust state management for user interactions, and a fully responsive design for seamless usability across desktops, tablets, and mobile devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "api",
        color: "orange-text-gradient",
      },
      // {
      //   name: "express",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "node",
      //   color: "pink-text-gradient",
      // },
      // {
      //   name: "typescript",
      //   color: "green-text-gradient",
      // }
    ],
    image: jobsPortal,
    links: {
      source_code: "https://github.com/nicholemcgrew/react-jobs-portal",
      source_deploy: "https://sparkly-vacherin-8aa98b.netlify.app/jobs"
    }
  },
  // {
  //   name: "Connected",
  //   description: "Elevate your online presence with custom-designed websites crafted to reflect your unique vision. With a keen eye for design and a focus on functionality, I specialize in delivering digital experiences that resonate with your audience. Join me in connecting art and logic, and building the website of your dreams.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongo",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "express",
  //       color: "green-text-gradient",
  //     },
  //     // {
  //     //   name: "node",
  //     //   color: "pink-text-gradient",
  //     // },
  //     // {
  //     //   name: "typescript",
  //     //   color: "green-text-gradient",
  //     // }
  //   ],
  //   image: comingsoon,
  //   links: {
  //     source_code: "https://github.com/nicholemcgrew/connected",
  //     source_deploy: "https://connected-link.netlify.app/"
  //   }
  // },
];

export { services, skills, projects };
