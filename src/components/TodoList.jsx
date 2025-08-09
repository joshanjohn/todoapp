import TodoListItem from "./TodoListItem";
import style from "./todoList.module.css";

export default function TodoList({ tasks, setTasks }) {
  return (
    <div className={style.todoList}>
      {tasks
        .slice()
        .reverse()
        .map((todo) => (
          <TodoListItem
            key={todo.name}
            todo={todo}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
    </div>
  );
}
