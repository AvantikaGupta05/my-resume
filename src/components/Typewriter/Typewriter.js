import React from "react";
import s from "./Typewriter.module.scss";

const Typewriter = ({ text }) => {
  return (
    <div className={s.typewriter}>
      <h1>{text}</h1>
    </div>
  );
};

export default Typewriter;
