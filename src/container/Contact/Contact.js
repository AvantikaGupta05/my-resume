import React from "react";
import Title from "../../components/Title/Title";
import s from "./Contact.module.scss";

const Contact = ({ id, sectionTitle }) => {
  return (
    <section id={id} className={s.content}>
      <Title text={sectionTitle} />
    </section>
  );
};

export default Contact;
