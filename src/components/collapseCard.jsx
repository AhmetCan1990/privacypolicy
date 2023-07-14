import React from "react";
import Styles from "./privacy.module.scss";
import { useState } from "react";
const CollapseCard = ({ item: { title, explanation } }) => {
  const [istrue, setIstrue] = useState(true);
  const handleCollapse = (e) => {
    setIstrue(!istrue);
    !istrue
      ? e.target
          .closest("div")
          .nextSibling.nextSibling.classList.add(Styles["visible"])
      : e.target
          .closest("div")
          .nextSibling.nextSibling.classList.remove(Styles["visible"]);
  };
  return (
    <div className={Styles.container}>
      <div className={Styles["container--icon"]}>
        {istrue ? (
          <i
            className="fa-solid fa-chevron-up fa-2x"
            onClick={handleCollapse}
          ></i>
        ) : (
          <i
            className="fa-solid fa-chevron-down fa-2x"
            onClick={handleCollapse}
          ></i>
        )}
      </div>
      <h3 className={Styles["container--title"]}>{title}</h3>
      <div id="aa" className={Styles[("container--explanation", "visible")]}>
        <p className={Styles.text}>{explanation}</p>
      </div>
    </div>
  );
};

export default CollapseCard;
