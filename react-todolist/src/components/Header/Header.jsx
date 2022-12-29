import React from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import styles from "./header.module.css";

export default function Header({
  filters,
  filter,
  onChangeFilter,
  mode,
  onChangeMode,
}) {
  return (
    <header className={styles.header}>
      <span onClick={() => onChangeMode(mode)}>
        {mode === "day" ? <BsFillMoonFill /> : <BsSun />}
      </span>

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
