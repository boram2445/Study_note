import React, { useState } from "react";
import styles from "./addTodo.module.css";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    onAdd({ id: new Date(), checked: false, text });
    setText("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <input
          type="text"
          placeholder="Add Todo"
          onChange={handleChange}
          value={text}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
