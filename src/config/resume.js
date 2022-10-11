import html5 from "../assets/logos/html5.webp";
import angular from "../assets/logos/angular.webp";
import css3 from "../assets/logos/css3.webp";
import git from "../assets/logos/git.webp";
import jenkins from "../assets/logos/jenkins.webp";
import js from "../assets/logos/js.webp";
import react from "../assets/logos/react.webp";
import redux from "../assets/logos/redux.webp";
import sass from "../assets/logos/sass.webp";
import sentry from "../assets/logos/sentry.webp";
import vue from "../assets/logos/vue.webp";
import vuex from "../assets/logos/vuex.webp";
import webpack from "../assets/logos/webpack.webp";
import wordpress from "../assets/logos/wordpress.webp";
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
import draw4 from "../assets/images/draw4.jpg";
import draw5 from "../assets/images/draw5.jpg";
import draw6 from "../assets/images/draw6.JPG";
import draw7 from "../assets/images/draw7.JPG";
import draw8 from "../assets/images/draw8.jpg";
import draw9 from "../assets/images/draw9.jpg";
import draw10 from "../assets/images/draw10.jpg";
import draw11 from "../assets/images/draw11.jpg";
import craft1 from "../assets/images/craft1.jpg";
import craft5 from "../assets/images/craft5.jpg";
import craft8 from "../assets/images/craft8.jpg";
import craft9 from "../assets/images/craft9.jpg";
import craft10 from "../assets/images/craft10.jpg";
import craft11 from "../assets/images/craft11.jpg";
import procreate1 from "../assets/images/procreate1.jpg";
import procreate2 from "../assets/images/procreate2.jpg";
import procreate3 from "../assets/images/procreate3.jpg";
import procreate4 from "../assets/images/procreate4.jpg";
import procreate5 from "../assets/images/procreate5.jpg";
import procreate6 from "../assets/images/procreate6.gif";

export const resume = {
  about: {
    id: "aboutme",
    sectionTitle: "About me",
    name: "Avantika Gupta",
    title: "Frontend Developer",
    description:
      "Being creative and driven, my interest lies in developing dynamic and responsive user interfaces. In my own time, I enjoy doing arts & crafts and bringing colors to life.",
    subtitle:
      "I believe that the solution is not the learning but the path to the solution is actual learning. As a patient listener and optimist, I always choose to embrace a situation rather than run from it. ",
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
        grade: "94.8%",
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
        images: [
          draw8,
          draw9,
          draw7,
          draw5,
          draw10,
          draw1,
          draw2,
          draw3,
          draw4,
          draw6,
          draw11,
        ],
      },
      {
        title: "Procreate",
        images: [
          procreate2,
          procreate5,
          procreate4,
          procreate1,
          procreate3,
          procreate6,
        ],
      },
      {
        title: "Craft",
        images: [craft8, craft1, craft5, craft10, craft9, craft11],
      },
    ],
  },
  contact: { id: "contact", sectionTitle: "Contact Details" },
};
