import React from "react";
import styles from "./App.module.css";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className={styles.bg}>
      <TodoList />
    </div>
  );
}
