import React, { useState, useRef, useEffect } from "react";
import Items from "../Items/Items";
import Header from "../Header/Header";
import styles from "./todolist.module.css";
import AddTodo from "../AddTodo/AddTodo";

// form 컴포넌트를 어떤식으로 쪼개야 하는지 모르겠다.
//이렇게 상위 컴포넌트에서 handleValue를 해도 되는걸까
export default function ItemForm() {
  const [mode, setMode] = useState("day");
  const [navFocus, setNavFocus] = useState("All");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  ); //localstorage가 변경될때마다 state값을 다시 렌더링 할 수 없을까

  const handleAdd = (todo) => {
    const newArr = [...items, todo];

    setItems(newArr);
    localStorage.setItem("items", JSON.stringify(newArr));
  };
  const handleDelete = (deleted) => {
    const newArr = items.filter((item) => item.id !== deleted.id);
    setItems(newArr);
    localStorage.setItem("items", JSON.stringify(newArr));
  };
  const handleCheck = (updated) => {
    const newArr = items.map((item) =>
      item.id === updated.id ? updated : item
    );
    setItems(newArr);
    localStorage.setItem("items", JSON.stringify(newArr));
  };

  const handleMode = (mode) => {
    setMode(mode === "day" ? "night" : "day");
  };

  const handleNav = (value) => {
    setNavFocus(value);
  };

  let content;
  if (navFocus === "Active") {
    content = items.filter((item) => !item.checked);
  } else if (navFocus === "Completed") {
    content = items.filter((item) => item.checked);
  } else {
    content = items;
  }

  return (
    <section className={styles.container}>
      <Header
        navFocus={navFocus}
        handleNav={handleNav}
        handleMode={handleMode}
        mode={mode}
      />
      <Items items={content} onDelete={handleDelete} onCheck={handleCheck} />
      {/* submit 버튼이 하위 컴포넌트에 있어도 onSubmit이작동한다. */}
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
