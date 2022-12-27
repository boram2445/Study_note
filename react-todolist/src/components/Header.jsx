import React from "react";
import { BsFillMoonFill } from "react-icons/bs";
import styles from "./header.module.css";

export default function Header({ navFocus, onClick }) {
  const navType = ["All", "Active", "Completed"];

  return (
    <header className={styles.header}>
      <BsFillMoonFill />
      <ul className={styles.nav}>
        {navType.map((nav, index) => (
          <li
            className={styles[`${navFocus === nav ? "focused" : ""}`]}
            onClick={() => onClick(nav)}
            key={index}
          >
            {nav}
          </li>
        ))}
      </ul>
    </header>
  );
}
