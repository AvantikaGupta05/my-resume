import React, { useState, useEffect } from "react";
import s from "./Menu.module.scss";
import Zigsaw from "../Zigsaw/Zigsaw";
import { menuConfig } from "../../config/menu";

const Menu = () => {
  const [active, setActive] = useState("aboutme");
  const navHighlighter = () => {
    const sections = document.querySelectorAll("section[id]");
    const contentWrap = document.getElementById("contentWrap");
    let scrollY = contentWrap.scrollTop;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        setActive(sectionId);
      }
    });
  };
  const scrollTo = (id) => {
    const ele = document.getElementById(id);
    if (ele) {
      ele.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const contentWrap = document.getElementById("contentWrap");
    contentWrap.addEventListener("scroll", navHighlighter);
    return () => {
      contentWrap.removeEventListener("scroll", navHighlighter);
    };
  }, []);
  return (
    <>
      <div className={`${s.menu} ${s.web}`}>
        {menuConfig.map((item, index) => {
          return (
            <Zigsaw
              key={index}
              handleClick={scrollTo}
              active={active}
              {...item}
            />
          );
        })}
      </div>
      <div className={`${s.menu} ${s.mweb}`}>
        <ul className={s.menu__list}>
          {menuConfig.map((item, index) => {
            const { icon, title, src } = item;
            return (
              icon && (
                <li
                  className={`${s.menu__item} ${
                    active === src ? s.active : ""
                  }`}
                  key={index}
                  onClick={() => scrollTo(src)}
                >
                  <img className={s.detail__icon} src={icon} alt="" />
                  <span className={s.detail__title}>{title}</span>
                </li>
              )
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Menu;
