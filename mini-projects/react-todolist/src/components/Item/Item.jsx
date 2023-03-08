import React from "react";
import { BsTrash } from "react-icons/bs";
import styles from "./item.module.css";

export default function Item({ item, onDelete, onCheck }) {
  const handleChange = () => onCheck({ ...item, checked: !item.checked });
  const handleDelete = () => onDelete(item);

  return (
    <li className={styles.item}>
      <label className={styles[`${item.checked ? "checked-label" : "label"}`]}>
        <input
          name={item.text}
          type="checkbox"
          onChange={handleChange}
          checked={item.checked}
        />
        {item.text}
      </label>
      <span className={styles.trash} onClick={handleDelete}>
        <BsTrash />
      </span>
    </li>
  );
}
