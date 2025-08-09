import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ tasks, setTasks }) {
  const [todo, setTodo] = useState({ name: "", isDone: false });

  function handleSubmit(e) {
    e.preventDefault();

    const trimmedName = todo.name.trim();

    if (trimmedName !== "") {
      // Check if any task already has the same name (case-insensitive)
      const exists = tasks.some(
        (task) => task.name.toLowerCase() === trimmedName.toLowerCase()
      );

      if (!exists) {
        setTasks([...tasks, { ...todo, name: trimmedName }]);
        setTodo({ name: "", isDone: false }); // reset input
      } else {
        alert("Task with the same name already exists!");
      }
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo.name}
        onChange={(e) => setTodo({ ...todo, name: e.target.value })}
        placeholder="Enter a task"
      />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
