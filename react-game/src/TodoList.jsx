import { useState } from "react"

export default function TodoList() {
    let [todos, setTodo] = useState(["Sample task"]);
    let [newTodo, setNewTodo] = useState("");

     let addNewTask = () => {
        console.log("we have to add new task in todo")
    }

    let updateTodoValue(event) {
        
    }


    return (
        <div>
            <input type="text" placeholder="Add a task" value={newTodo} onChange={}/>
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /> <br /><br />
            <hr />
            <h4>Tasks Todo</h4>
            <ul>
                {
                    todos.map((todo) => {
                        return <li>{todo}</li>
                    })
                }

            </ul>
        </div>
    )
}