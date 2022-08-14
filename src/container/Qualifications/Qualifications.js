import React from "react";
import Title from "../../components/Title/Title";
import s from "./Qualifications.module.scss";

const Qualifications = ({ id, sectionTitle, items }) => {
  return (
    <section id={id} className={s.content}>
      <Title text={sectionTitle} />
      <div className={s.timeline}>
        {items.map(({ title, school, grade, unit, year, icon }, index) => {
          return (
            <div
              className={`${s.timeline__event} ${
                s[`timeline__event__type${index + 1}`]
              }`}
            >
              <div className={s.timeline__event__icon}>
                <img src={icon} alt=""></img>
              </div>
              <div className={s.timeline__event__date}>{year}</div>
              <div className={s.timeline__event__content}>
                <div className={s.timeline__event__title}>{title}</div>
                <div className={s.timeline__event__description}>
                  <span>{school}</span>
                  <span className={s.timeline__event__grade}>
                    {unit}: <span>{grade}</span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Qualifications;
