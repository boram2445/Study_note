import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import styles from "./item.module.css";

export default function Item({ label, checked, id, onDelete, onCheck }) {
  const [itemChecked, setItemChecked] = useState(checked);

  const handleChecked = () => {
    setItemChecked((itemChecked) => !itemChecked);
    onCheck(id, !checked);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li className={styles.item}>
      <label className={styles[`${itemChecked ? "checked-label" : "label"}`]}>
        <input
          name={label}
          type="checkbox"
          onChange={handleChecked}
          checked={itemChecked}
        />
        {label}
      </label>
      <span className={styles.trash} onClick={handleDelete}>
        <BsTrash />
      </span>
    </li>
  );
}
