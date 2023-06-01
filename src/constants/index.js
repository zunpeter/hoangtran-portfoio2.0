import {
  mobile,
  flutter,
  creator,
  web,
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
  ielts,
  coursera,
  fpt,
  help,
  carrent,
  jobit,
  rps,
  tripguide,
  threejs,
  llfoa,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: 'project',
    title: "Project"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "React Native",
    icon: mobile,
  },
  {
    title: "Flutter",
    icon: flutter,
  },
  {
    title: "UX/UI Design",
    icon: creator,
  },
];

const technologies = [
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "docker",
    icon: docker,
  },
];

const educations = [
  {
    title: "Coursera",
    company_name: "Coursera Inc.",
    icon: coursera,
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "IELTS",
    company_name: "IELTS Official",
    icon: ielts,
    iconBg: "#E6DEDD",
    date: "Feb 2023",
    points: [
      "Overall: 6.0",
      "International English Language Testing System",
    ],
  },
  {
    title: "FPT University",
    company_name: "FPT Group",
    icon: fpt,
    iconBg: "#E6DEDD",
    date: "Jan 2021",
    points: [
      "Class of 2023",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Help University",
    company_name: "The University of Achievers",
    icon: help,
    iconBg: "#E6DEDD",
    date: "June 2019",
    points: [
      "Cultural exchange",
      "English Language and Literature/Letters",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Hoang proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Hoang does",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Hoang optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Image Generator",
    description:
      "Website using dall-e API for text-to-image generator",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/zunpeter/AI-Image-Generator.git",
  },
  {
    name: "Note Mobile",
    description:
      "Mobile application using Sqflite Local database to save data direct to your device",
    tags: [
      {
        name: "Dart",
        color: "blue-text-gradient",
      },
      {
        name: "CMake",
        color: "green-text-gradient",
      },
      {
        name: "C++",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/zunpeter/sqflite-Flutter.git",
  },
  {
    name: "Rock, Paper, Scissors",
    description:
      "Mini game Rock, Paper, Scissors (Challange from Front-end Mentor)",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: rps,
    source_code_link: "https://github.com/zunpeter/Rock-Paper-Scissors-game.git",
  },
  {
    name: "Little Lemon Restaurant",
    description:
      "A dynamic, responsive website querying RESTful Table-booking API & MySQL Database. Features email confirmation and form validation functionality.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/zunpeter/littleLemon.git",
  },
  {
    name: "Little Lemon Food Ordering App",
    description:
      "This is the final project for the iOS App Capstone, part of the Meta iOS Developer Professional Certificate program. The app is a food ordering app that allows users to browse Little Lemon restaurant's menu and place orders.",
    tags: [
      {
        name: "Swift",
        color: "pink-text-gradient",
      },
    ],
    image: llfoa,
    source_code_link: "https://github.com/zunpeter/Rock-Paper-Scissors-game.git",
  },
];

export { services, technologies, educations, testimonials, projects };