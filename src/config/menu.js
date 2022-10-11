import Qualifications from "../assets/icons/qualifications.svg";
import About from "../assets/icons/about.svg";
import Experience from "../assets/icons/experience.svg";
import Hobbies from "../assets/icons/hobbies.svg";
import Skills from "../assets/icons/skills.svg";
import myPic from "../assets/images/myPic.jpeg";

export const menuConfig = [
  {
    type: "bottomin",
    color: "#feecd6",
    img: myPic,
    src: "profile",
  },
  {
    type: "topoutbottomin",
    color: "#f595b2",
    icon: About,
    title: "About me",
    src: "aboutme",
  },
  {
    type: "topoutbottomout",
    color: "#ffb3b3",
    icon: Skills,
    title: "Skills",
    src: "skills",
  },
  {
    type: "topinbottomout",
    color: "#fff1ba",
    icon: Experience,
    title: "Experiences",
    src: "experiences",
  },
  {
    type: "topinbottomout",
    color: "#bee3ed",
    icon: Qualifications,
    title: "Qualifications",
    src: "qualifications",
  },
  {
    type: "topin",
    color: "#afadde",
    icon: Hobbies,
    title: "Hobbies",
    src: "hobbies",
  },
  // {
  //   type: "topin",
  //   color: "#fec6df",
  //   icon: Contact,
  //   title: "Contact",
  //   src: "contact",
  // },
];
