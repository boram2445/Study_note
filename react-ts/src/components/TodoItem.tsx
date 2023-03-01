import styles from "./todoItem.module.css";

type TodoItemProps = {
  text: string;
  onRemoveTodo: () => void;
};

function TodoItem({ text, onRemoveTodo }: TodoItemProps) {
  return (
    <li className={styles.item} onClick={onRemoveTodo}>
      {text}
    </li>
  );
}

export default TodoItem;
