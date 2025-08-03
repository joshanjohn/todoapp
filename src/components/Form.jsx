import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ tasks, setTasks }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // append to tasks list
    if (todo != "") {
      if (!tasks.includes(todo)) { // check if it has duplicate
        setTasks([...tasks, todo]);
        setTodo(""); //resetting input
      }
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <br />
      <br />
      <button type="submit">submit</button>
    </form>
  );
}
