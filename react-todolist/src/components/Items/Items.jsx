import React from "react";
import Item from "../Item/Item";
import styles from "./items.module.css";

export default function Items({ items, onDelete, onCheck }) {
  return (
    <ul className={styles.list}>
      {/* key를 이렇게 부여해 주면 안되나  => 가능하다!*/}
      {items.map((item) => (
        <Item item={item} key={item.id} onDelete={onDelete} onCheck={onCheck} />
      ))}
    </ul>
  );
}
