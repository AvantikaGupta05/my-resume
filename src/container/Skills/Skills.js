import React from "react";
import Title from "../../components/Title/Title";
import s from "./Skills.module.scss";

const Skills = ({ id, sectionTitle, items }) => {
  return (
    <section id={id} className={s.content}>
      <Title text={sectionTitle} />
      <div className={s.gallery}>
        {items.map(({ name, img }, index) => {
          return (
            <div key={index} className={s.skill}>
              <img className={s.skill__img} src={img} alt={name} />
              <span className={s.skill__title}>{name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
