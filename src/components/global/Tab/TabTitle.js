/** @format */

import styles from "./Tab.module.scss";

import {
  RightArrowDarkIcon,
  RightArrowLightIcon,
} from "@/components/global/Svgs";

const TabTitle = ({ text, index, setActiveTab, activeTab }) => {
  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <li
      className={`${index === activeTab ? styles["active"] : ""}`}
      onClick={() => handleClick(index)}
    >
      {text}
      {index === activeTab ? <RightArrowDarkIcon /> : <RightArrowLightIcon />}
    </li>
  );
};

export default TabTitle;
