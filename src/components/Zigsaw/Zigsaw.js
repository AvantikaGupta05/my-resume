import React from "react";
import s from "./Zigsaw.module.scss";

const ZigsawBottomIn = ({ color }) => {
  return (
    <>
      <div className={`${s.in} ${s.in__bottom}`}></div>
    </>
  );
};

const ZigsawTopOutBottomIn = ({ color }) => {
  return (
    <>
      <div
        className={`${s.out} ${s.out__top}`}
        style={{ backgroundColor: color }}
      ></div>
      <div className={`${s.in} ${s.in__bottom}`}></div>
    </>
  );
};

const ZigsawTopOutBottomOut = ({ color }) => {
  return (
    <>
      <div
        className={`${s.out} ${s.out__top}`}
        style={{ backgroundColor: color }}
      ></div>
      <div
        className={`${s.out} ${s.out__bottom}`}
        style={{ backgroundColor: color }}
      ></div>
    </>
  );
};

const ZigsawTopInBottomOut = ({ color }) => {
  return (
    <>
      <div className={`${s.in} ${s.in__top}`}></div>
      <div
        className={`${s.out} ${s.out__bottom}`}
        style={{ backgroundColor: color }}
      ></div>
    </>
  );
};

const ZigsawTopIn = ({ color }) => {
  return (
    <>
      <div className={`${s.in} ${s.in__top}`}></div>
    </>
  );
};

const config = {
  bottomin: ZigsawBottomIn,
  topoutbottomin: ZigsawTopOutBottomIn,
  topoutbottomout: ZigsawTopOutBottomOut,
  topinbottomout: ZigsawTopInBottomOut,
  topin: ZigsawTopIn,
};

const Zigsaw = ({
  type,
  color,
  icon,
  title,
  src,
  img,
  handleClick,
  active,
}) => {
  const Comp = config[type];
  return (
    <>
      <div
        onClick={() => handleClick(src)}
        className={`${s.zigsaw} ${active === src ? s.active : ""}`}
        style={{ backgroundColor: color }}
      >
        <Comp color={color} />
        {!img ? (
          <>
            <div
              className={`${s.out} ${s.out__right} ${s.toggle}`}
              style={{ backgroundColor: color }}
            ></div>
            <div className={s.detail}>
              <img className={s.detail__icon} src={icon} alt="" />
              <span className={s.detail__title}>{title}</span>
            </div>
          </>
        ) : (
          <div className={s.pic}>
            <img src={img} alt="" />
          </div>
        )}
      </div>
    </>
  );
};

export default Zigsaw;
