import React, { useState, useRef } from "react";
import Items from "./Items";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./todolist.module.css";

// form 컴포넌트를 어떤식으로 쪼개야 하는지 모르겠다.
//이렇게 상위 컴포넌트에서 handleValue를 해도 되는걸까
export default function ItemForm() {
  const [navFocus, setNavFocus] = useState("All");
  const [items, setItems] = useState([]);
  const [value, setValue] = useState(undefined);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    setItems((items) => [
      ...items,
      { id: Math.random(), checked: false, label: value },
    ]);
    inputRef.current.value = "";
    inputRef.current.focus();
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleCheck = (id, checked) => {
    setItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          return { ...item, checked };
        }
        return item;
      })
    );
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
    <form onSubmit={handleSubmit} className={styles.container}>
      <Header navFocus={navFocus} onClick={handleNav} />
      <Items items={content} onDelete={handleDelete} onCheck={handleCheck} />
      {/* submit 버튼이 하위 컴포넌트에 있어도 onSubmit이작동한다. */}
      <Footer onChange={handleChange} inputRef={inputRef} />
    </form>
  );
}
