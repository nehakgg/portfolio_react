import alumni1 from "../ProjectImage/alumni1.png";
import alumni2 from "../ProjectImage/alumni2.png";
import alumni3 from "../ProjectImage/alumni3.png";

import portfolio1 from '../ProjectImage/portfolio1.png';
import portfolio2 from '../ProjectImage/portfolio2.png';

import math1 from '../ProjectImage/math1.png';
import math2 from '../ProjectImage/math2.png';
import personal1 from '../ProjectImage/personal1.png';
import personal2 from '../ProjectImage/personal2.png';
import weather1 from "../ProjectImage/weather1.png";
import weather2 from "../ProjectImage/weather2.png";
import currency1 from "../ProjectImage/currency1.png";
export const projects = [
  {
    id: "1",
    title: "Alumni Tracker",
    date: "Nov 2023 - Feb 2024",
    description:
      "Alumni Tracker is a web application developed using the MERN (MongoDB, Express.js, React, Node.js) stack. It serves a platform for alumni to connect, share updates, and engage with the admin seamlessly. The application is divided into user and admin interfaces, each equipped with distinct features and functionalities.",
    images: [alumni1,alumni2,alumni3],
    tags: [
      "React Js",
      "Redux",
      "Tailwind Css",
      "MongoDb",
      "Node Js",
      "Express Js",
      "PostMan",
      "Cloudinary",
      "Twilio",
      "NodeMailer",
      "JWT",
    ],
    github: "https://github.com/nehakgg/alumuni-track-4",
    webapp: "https://alumuni-track-client.vercel.app/",
  },
  {
    id: "2",
    title: "Portfolio",
    date: "Feb 2024 - Mar2024",
    description:
      "I built a personal portfolio website using React and styled it with Tailwind CSS. I made it interactive by adding cool animations using React tools like Lottie. The website is designed to look good and work well on all devices, from big screens to smartphones. It's a showcase of my work and skills in a user-friendly way.",
    images: [portfolio1,portfolio2],
    tags: [
      "React Js",
      "Redux",
      "Tailwind Css",
      "Css",
    ],
    github: "https://github.com/aashish649/portfolio",
    webapp: "https://aashishanand.vercel.app/",
  },
  // {
  //   id: "3",
  //   title: "Math Helper",
  //   date: "Jun 2022 - August 2023",
  //   description:
  //     "Mathelper is a web app offering solutions for quadratic equations, percentage calculations, area, perimeter, and unit conversion. Simplify math tasks conveniently.",
  //   images: [math1,math2],
  //   tags: [
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "Netlify",
  //   ],
  //   category: "web app",
  //   github: "https://github.com/aashish649/Mathhelper",
  //   webapp: "https://mathtool.netlify.app/",
  // },
  {
    id: "4",
    title: "personal",
    date: "Jun 2022 - Aug 2023",
    description:
      "A complete responsive portfolio website created using HTML, CSS, and JavaScript to learn JavaScript and responsiveness",
    images: [ personal1,personal2,     
    ],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Netlify",
    ],
    github: "https://github.com/nehakgg/My-personal-resume",
    webapp: "https://nehakkg.netlify.app/",
  },
  {
    id: "5",
    title: "Movie streaming website",
    date: "dec 2023 - dec 2023",
    description:"a website that shows a list of Movies, trailors Movie cast and a short description about the Movie",
    images: [weather1,weather2],
    tags: [
      "HTML",
      "CSS",
      "JavaScript", 
    ],
    category: "Movie app",
    github: "https://github.com/nehakgg/Movie/tree/main/Neha_github_project",
    webapp: "https://lively-duckanoo-178359.netlify.app/",
  },
  {
    id: "6",
    title: "Virtual Drum Kit",
    date: "Dec 2023 - Dec 2023",
    description:"A fully responsive music playing website that consist of collection of all Drumming sets where you can playbeats with your smartphone or laptop just by touching on drum sets",
    images: [currency1,currency1],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    category: "web app",
    github: "https://github.com/nehakgg/drum-kit/tree/main/Drum%20Kit%20Completed",
    webapp: "https://ephemeral-douhua-6944c2.netlify.app/",
  },
];
