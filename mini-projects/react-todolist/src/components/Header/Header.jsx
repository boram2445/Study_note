import React from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { useDarkMode } from "../../context/DarkModeContext";
import styles from "./header.module.css";

export default function Header({ filters, filter, onChangeFilter }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={`${styles.header} ${darkMode && styles.dark} `}>
      <button onClick={toggleDarkMode}>
        {darkMode ? <BsSunFill /> : <BsFillMoonFill />}
      </button>
      <ul className={styles.nav}>
        {filters.map((item, index) => (
          <li className={`${filter === item && styles.focused}`} key={index}>
            <button onClick={() => onChangeFilter(item)}>{item}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
