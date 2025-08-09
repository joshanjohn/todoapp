import styles from "./todoListItem.module.css";
export default function TodoListItem({ todo, setTasks, tasks }) {
  function onDelete(todo) {
    console.log("Delete todo :" + todo);
    setTasks(tasks.filter((_todo) => _todo.name !== todo.name));
  }

  return (
    <div className={styles.todoListItem}>
      <h4>{todo.name}</h4>

      <button className={styles.actionButton} onClick={() => onDelete(todo)}>
        remove
      </button>
    </div>
  );
}
