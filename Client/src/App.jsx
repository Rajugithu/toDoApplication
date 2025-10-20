import React, { useState, useEffect } from "react";
import TaskForm from "./Components/TaskForm";
import TaskCard from "./Components/TaskCard";
import { fetchTasks, createTask, updateTask, deleteTask, enhanceText } from "./services/api.js";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  // Load tasks from backend when component mounts
  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const tasksData = await fetchTasks();
      setTasks(tasksData);
    } catch (error) {
      console.error("Error loading tasks:", error);
      alert("Failed to load tasks from server");
    }
  };

  const addTask = async () => {
    if (!title || !desc) {
      alert("Please fill both title and description");
      return;
    }
    
    try {
      const result = await createTask({ title, desc });
      if (result.task) {
        setTasks([...tasks, result.task]);
        setTitle("");
        setDesc("");
        alert("Task added successfully!");
      }
    } catch (error) {
      console.error("Error adding task:", error);
      alert("Failed to add task");
    }
  };

  const updateTaskHandler = async (id) => {
    const currentTask = tasks.find(task => task.id === id);
    const newTitle = prompt("Enter new title:", currentTask.title);
    const newDesc = prompt("Enter new description:", currentTask.desc);
    
    if (!newTitle || !newDesc) return;

    try {
      await updateTask(id, { title: newTitle, desc: newDesc });
      // Refresh the tasks list from server
      loadTasks();
      alert("Task updated successfully!");
    } catch (error) {
      console.error("Error updating task:", error);
      alert("Failed to update task");
    }
  };

  const deleteTaskHandler = async (id) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    
    try {
      await deleteTask(id);
      setTasks(tasks.filter((t) => t.id !== id));
      alert("Task deleted successfully!");
    } catch (error) {
      console.error("Error deleting task:", error);
      alert("Failed to delete task");
    }
  };

  const enhanceTask = async () => {
    if (!desc) {
      alert("Please enter some text to enhance");
      return;
    }
    
    setLoading(true);
    try {
      const result = await enhanceText(desc);
      if (result.result) {
        setDesc(result.result);
        alert("Text enhanced with AI!");
      }
    } catch (error) {
      console.error("Error enhancing text:", error);
      alert("AI enhancement failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">To-Do App</h1>

      <TaskForm
        title={title}
        setTitle={setTitle}
        desc={desc}
        setDesc={setDesc}
        addTask={addTask}
        enhanceTask={enhanceTask}
        loading={loading}
      />

      <div className="w-full max-w-md">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks yet. Add your first task above!</p>
        ) : (
          tasks.map((task) => (
            <TaskCard 
              key={task.id} 
              task={task} 
              updateTask={updateTaskHandler} 
              deleteTask={deleteTaskHandler} 
            />
          ))
        )}
      </div>
    </div>
  );
}