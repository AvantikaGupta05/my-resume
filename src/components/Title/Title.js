import React from "react";
import s from "./Title.module.scss";

const Title = ({ text }) => {
  return <div className={s.title}>{text}</div>;
};

export default Title;
