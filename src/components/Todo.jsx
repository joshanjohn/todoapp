import { useState } from "react";
import TodoList from "./TodoList";
import Form from "./Form";

export default function Todo() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Form tasks={tasks} setTasks={setTasks}/>

      <TodoList tasks={tasks} />
      {console.log(tasks)}
    </div>
  );
}
