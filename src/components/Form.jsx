import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ tasks, setTasks }) {
  const [todo, setTodo] = useState({ name: "", isDone: false });

  function handleSubmit(e) {
    e.preventDefault();
    // append to tasks list
    if (todo != "") {
      if (!tasks.includes(todo)) {
        // check if it has duplicate
        setTasks([...tasks, todo]);
        setTodo({name:"", isDone:false}); //resetting input
      }
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo.name}
        onChange={(e) => setTodo({ ...todo, name: e.target.value })}
      />
      <br />
      <br />
      <button type="submit">submit</button>
      {console.log(tasks)}
    </form>
  );
}
