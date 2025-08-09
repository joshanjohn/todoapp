import styles from "./todoListItem.module.css";
export default function TodoListItem({ todo, setTasks, tasks}) {

  function handleDelete(todo) {
    console.log("Delete todo :" + todo);
    setTasks(tasks.filter((_todo) => _todo.name !== todo.name))
  }

  return (
    <div className={styles.todoListItem}>
      <h4>
        {todo.name}
        <span>
          <button
            onClick={() => handleDelete(todo)}
            className={styles.deleteBtn}
          >
            remove
          </button>
        </span>
      </h4>
    </div>
  );
}
