import html5 from "../assets/logos/html5.png";
import angular from "../assets/logos/angular.png";
import css3 from "../assets/logos/css3.png";
import git from "../assets/logos/git.png";
import jenkins from "../assets/logos/jenkins.png";
import js from "../assets/logos/js.png";
import react from "../assets/logos/react.png";
import redux from "../assets/logos/redux.png";
import sass from "../assets/logos/sass.png";
import sentry from "../assets/logos/sentry.png";
import vue from "../assets/logos/vue.png";
import vuex from "../assets/logos/vuex.png";
import webpack from "../assets/logos/webpack.png";
import wordpress from "../assets/logos/wordpress.png";
import education from "../assets/icons/education.svg";
import seniorEducation from "../assets/icons/seniorEducation.svg";
import btech from "../assets/icons/btech.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import codepen from "../assets/icons/codepen.svg";
import instagram from "../assets/icons/instagram.svg";
import draw1 from "../assets/images/draw1.jpg";
import draw2 from "../assets/images/draw2.jpg";
import draw3 from "../assets/images/draw3.jpg";
import craft1 from "../assets/images/craft1.jpg";

export const resume = {
  about: {
    id: "aboutme",
    sectionTitle: "About me",
    name: "Avantika Gupta",
    title: "Frontend Developer",
    description:
      "A motivated, creative, and hardworking Frontend Developer with keen interest in UI development. Looking for a challenging career and to work with an organization which appreciates innovation and gives scope to enhance knowledge and skills to reach the pinnacle in computing with determination, dedication, and hard work.",
    items: [
      {
        icon: linkedin,
        url: "https://linkedin.com/in/avantika96/",
      },
      {
        icon: github,
        url: "https://github.com/Avantika96",
      },
      {
        icon: codepen,
        url: "https://codepen.io/Avantika96/collections/",
      },
      {
        icon: instagram,
        url: "https://www.instagram.com/_the_creative_flow_/",
      },
    ],
  },
  skills: {
    id: "skills",
    sectionTitle: "Skills",
    items: [
      {
        name: "HTML5",
        img: html5,
      },
      {
        name: "CSS3",
        img: css3,
      },
      {
        name: "Sass",
        img: sass,
      },
      {
        name: "Javascript",
        img: js,
      },
      {
        name: "ReactJS",
        img: react,
      },
      {
        name: "VuesJS",
        img: vue,
      },
      {
        name: "AngularJS",
        img: angular,
      },
      {
        name: "Redux",
        img: redux,
      },
      {
        name: "Vuex",
        img: vuex,
      },
      {
        name: "Webpack",
        img: webpack,
      },
      {
        name: "Wordpress",
        img: wordpress,
      },
      {
        name: "Git",
        img: git,
      },
      {
        name: "Sentry",
        img: sentry,
      },
      {
        name: "Jenkins",
        img: jenkins,
      },
    ],
  },
  experiences: {
    id: "experiences",
    sectionTitle: "Experiences",
    items: [
      {
        designation: "Senior Software Engineer",
        company: "Paytm, Noida",
        year: "Apr 2022 – Present",
        description: [
          "Led a feature of header footer revamp across Paytm website.",
          "Helped with server migration and cleanup tasks.",
        ],
      },
      {
        designation: "Software Engineer",
        company: "Paytm, Noida",
        year: "Jul 2021 - Mar 2022",
        description: [
          "Converted Paytm foundation website from static to storefront driven.",
          "Delivered multiple Paytm games.",
          "Crafted an SDK of 25+ storefront driven common widgets that helped various verticals by speeding up development process.",
        ],
      },
      {
        designation: "Senior Frontend Developer - 1",
        company: "Josh Technology Group, Gurugram",
        year: "Oct 2020 - Jul 2021",
        description: [
          "Supervised multiple features in the project and mentored team members.",
          "Assisted my team with POC and transition of application from Angular to React.",
          "White labelling automation for different clients.",
          "Performed POC on MJML framework for efficient email designing.",
          "Recruitment process involvement across various levels.",
        ],
      },
      {
        designation: "Frontend Developer",
        company: "Josh Technology Group, Gurugram",
        year: "Aug 2019 - Sep 2020",
        description: [
          "Designed robust and extensible product functionality, maintaining good quality code, and ensuring pixel-perfection and responsiveness of the designs.",
          "Collaborated on a website built on WordPress using Beaver builder plugin for fast development.",
          "Worked on a healthcare project built on AngularJS framework. Delivered features end to end from requirement gathering, UI development, integration to feature release.",
          "Added support of outlook clients for email templates.",
        ],
      },
      {
        designation: "Frontend Intern",
        company: "Josh Technology Group, Gurugram",
        year: "Feb 2019 - Jul 2019",
        description: [
          "Ramped up on Frontend frameworks: Angular4, ReactJS.",
          "Created multiple responsive web pages ensuring pixel perfection of the designs and cross browser support. Developed re-usable, maintainable cross browser React components using Material UI and Storybook.",
        ],
      },
    ],
  },
  qualifications: {
    id: "qualifications",
    sectionTitle: "Qualifications",
    items: [
      {
        title: "Bachelor of Technology (Hons.)",
        school: "Jaypee Institute of Information Technology, Noida",
        year: "2015-2019",
        grade: "8.5",
        unit: "CGPA",
        icon: btech,
      },
      {
        title: "Senior Secondary Education (CBSE)",
        school: "GRM School, Bareilly",
        year: "2014-2015",
        grade: "8.5",
        unit: "Percentage",
        icon: seniorEducation,
      },
      {
        title: "Secondary Education (CBSE)",
        school: "GRM School, Bareilly",
        year: "2012-2013",
        grade: "10.0",
        unit: "CGPA",
        icon: education,
      },
    ],
  },
  hobbies: {
    id: "hobbies",
    sectionTitle: "Hobbies",
    items: [
      {
        title: "Art",
        images: [draw1, draw2, draw3],
      },
      {
        title: "Craft",
        images: [craft1],
      },
    ],
  },
  contact: { id: "contact", sectionTitle: "Contact Details" },
};
