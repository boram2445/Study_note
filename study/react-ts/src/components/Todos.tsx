import { Todo } from "../models/todo";
import TodoItem from "./TodoItem";
import styles from "./todos.module.css";

type TodoProps = {
  items: Todo[];
  onRemoveTodo: (id: string) => void;
};

function Todos({ items, onRemoveTodo }: TodoProps) {
  return (
    <ul className={styles.todos}>
      {items.map((item) => (
        <TodoItem
          text={item.text}
          key={item.id}
          onRemoveTodo={onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
}

export default Todos;
