import React from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import styles from "./header.module.css";

export default function Header({ navFocus, handleNav, handleMode, mode }) {
  const navType = ["All", "Active", "Completed"];

  return (
    <header className={styles.header}>
      <span onClick={() => handleMode(mode)}>
        {mode === "day" ? <BsFillMoonFill /> : <BsSun />}
      </span>
      <ul className={styles.nav}>
        {navType.map((nav, index) => (
          <li
            className={styles[`${navFocus === nav ? "focused" : ""}`]}
            onClick={() => handleNav(nav)}
            key={index}
          >
            {nav}
          </li>
        ))}
      </ul>
    </header>
  );
}
