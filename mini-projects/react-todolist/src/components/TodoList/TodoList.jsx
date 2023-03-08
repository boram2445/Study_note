import React, { useEffect, useState } from "react";
import Items from "../Items/Items";
import AddTodo from "../AddTodo/AddTodo";

// form 컴포넌트를 어떤식으로 쪼개야 하는지 모르겠다. - 최대한 내려야 한다.
export default function TodoList({ filter }) {
  const [items, setItems] = useState(readTodosFromLocalStorage); //localstorage가 변경될때마다 state값을 다시 렌더링 할 수 없을까

  const handleAdd = (todo) => setItems([...items, todo]);
  const handleDelete = (deleted) =>
    setItems(items.filter((item) => item.id !== deleted.id));
  const handleCheck = (updated) =>
    setItems(items.map((item) => (item.id === updated.id ? updated : item)));
  const filtered = getFilteredItems(filter, items);

  useEffect(() => {
    localStorage.items = JSON.stringify(items);
  }, [items]);

  return (
    <section>
      <Items items={filtered} onDelete={handleDelete} onCheck={handleCheck} />
      {/* submit 버튼이 하위 컴포넌트에 있어도 onSubmit이작동한다. */}
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function readTodosFromLocalStorage() {
  const todos = localStorage.items;
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(filter, items) {
  if (filter === "Active") {
    return items.filter((item) => !item.checked);
  } else if (filter === "Completed") {
    return items.filter((item) => item.checked);
  } else {
    return items;
  }
}
