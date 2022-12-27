import React from "react";
import styles from "./footer.module.css";

export default function Footer({ onChange, inputRef }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <input
          type="text"
          placeholder="Add Todo"
          onChange={onChange}
          ref={inputRef}
        />
        <button type="submit">Add</button>
      </div>
    </footer>
  );
}
