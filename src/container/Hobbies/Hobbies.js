import React from "react";
import Title from "../../components/Title/Title";
import s from "./Hobbies.module.scss";

const Hobbies = ({ id, sectionTitle, items }) => {
  return (
    <section id={id} className={s.content}>
      <Title text={sectionTitle} />
      {items.map(({ title, images }, index) => {
        return (
          <div className={s.gallery} key={index}>
            <span className={s.gallery__title}>{title}</span>
            <div className={s.wrap}>
              <div className={s.gallery__wrap}>
                {images.map((image, key) => {
                  return (
                    <img
                      className={s.gallery__img}
                      src={image}
                      alt=""
                      key={key}
                      loading="lazy"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Hobbies;
