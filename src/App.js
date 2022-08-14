import React from "react";
import s from "./App.module.scss";
import Menu from "./components/Menu/Menu";
import About from "./container/About/About";
import Skills from "./container/Skills/Skills";
import Experiences from "./container/Experiences/Experiences";
import Qualifications from "./container/Qualifications/Qualifications";
import Hobbies from "./container/Hobbies/Hobbies";
// import Contact from "./container/Contact/Contact";
import { resume } from "./config/resume";

function App() {
  const { about, skills, qualifications, experiences, hobbies, contact } =
    resume;
  return (
    <div className={s.app}>
      <div className={s.container}>
        <Menu />
        <div id="contentWrap" className={s.contentWrap}>
          <About {...about} />
          <Skills {...skills} />
          <Experiences {...experiences} />
          <Qualifications {...qualifications} />
          <Hobbies {...hobbies} />
          {/* <Contact {...contact} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
