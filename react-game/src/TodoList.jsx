import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodo] = useState([{ task: "Sample task", id: uuidv4() , isDone: false}]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodo((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodo(todos.filter((todo) => todo.id != id));
  };

  let upperCaseAll = () => {
    setTodo(
      todos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let markAsDone = (id) => {
    setTodo(
      todos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else{
            return todo;
        }
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br /> <br />
      <br />
      <hr />
      <h4>Tasks Todo</h4>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span style={todo.isDone ? {textDecorationLine: "line-through"}: {}}>{todo.task}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={() => deleteTodo(todo.id)}>delete</button>
              <button onClick={() => markAsDone(todo.id)}>
                Mark As Done
              </button>
            </li>
          );
        })}
        <br />
        <br />
        <button onClick={upperCaseAll}>UpperCase All</button>
      </ul>
    </div>
  );
}
