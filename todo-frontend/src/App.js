import React, { useEffect, useState } from "react";
import API from "./api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await API.get("/");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add task
  const addTask = async () => {
    if (!title) return;
    await API.post("/", { title });
    setTitle("");
    fetchTasks();
  };

  // Toggle status
  const toggleTask = async (id, completed) => {
    await API.put(`/${id}`, { completed: !completed });
    fetchTasks();
  };

  // Delete task
  const deleteTask = async (id) => {
    await API.delete(`/${id}`);
    fetchTasks();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>To-Do List</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <span
              onClick={() => toggleTask(task._id, task.completed)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {task.title}
            </span>

            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
