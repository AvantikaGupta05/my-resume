import React, { useState } from "react";
import Title from "../../components/Title/Title";
import s from "./Experiences.module.scss";

const Experiences = ({ id, sectionTitle, items }) => {
  const [active, setActive] = useState(1);
  return (
    <section id={id} className={s.content}>
      <Title text={sectionTitle} />
      <div className={s.timeline}>
        {items.map(({ designation, company, year, description }, index) => {
          return (
            <div
              className={`${s.container} ${
                index % 2 === 0 ? s.right : s.left
              } ${active === index ? s.active : ""}`}
              onClick={() => setActive(index)}
            >
              <div className={s.date}>{year}</div>
              <div
                className={`${s.infoWrap} ${
                  index % 2 === 0 ? s.right : s.left
                }`}
              >
                <div className={s.info}>
                  <span className={s.info__desg}>{designation}</span>
                  <span className={s.info__company}>{company}</span>
                </div>
                {description.length > 0 && (
                  <div className={s.description}>
                    <ul>
                      {description.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experiences;
