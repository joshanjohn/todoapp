import styles from "./todoListItem.module.css";
export default function TodoListItem({ todo }) {
  return (
    <div className={styles.todoListItem}>
      <h4>{todo}</h4>
    </div>
  );
}
