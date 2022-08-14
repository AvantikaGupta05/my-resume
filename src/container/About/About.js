import React from "react";
import Typewriter from "../../components/Typewriter/Typewriter";
import Title from "../../components/Title/Title";
import s from "./About.module.scss";

const About = ({ id, name, title, description, sectionTitle, items }) => {
  return (
    <section id={id} className={s.content}>
      <Typewriter text={name} />
      <h2 className={s.content__title}>{title}</h2>
      <Title text={sectionTitle} />
      <p className={s.content__desc}>{description}</p>
      <div className={s.social}>
        {items.map(({ icon, url }, index) => {
          return (
            <a
              className={s.social__icon}
              href={url}
              rel="noreferrer"
              target="_blank"
            >
              <img src={icon} alt="" />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default About;
