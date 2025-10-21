// This will not work on Netlify
// const API_BASE = "http://localhost:5000/api/tasks";

// This will also not work with the proxy (and would cause CORS errors)
// const API_BASE = "https://to-do-application-liard.vercel.app/api/tasks";

// THIS IS THE CORRECT LINE FOR DEPLOYMENT
const API_BASE = "/api/tasks";

// Get all tasks
export const fetchTasks = async () => {
  // This will now correctly request /api/tasks
  const response = await fetch(API_BASE);
  return await response.json();
};

// Add new task
export const createTask = async (taskData) => {
  // This will correctly request /api/tasks/add
  const response = await fetch(`${API_BASE}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  });
  return await response.json();
};

// Update task
export const updateTask = async (id, taskData) => {
  // This will correctly request /api/tasks/update/some-id
  const response = await fetch(`${API_BASE}/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  });
  return await response.json();
};

// Delete task
export const deleteTask = async (id) => {
  // This will correctly request /api/tasks/delete/some-id
  const response = await fetch(`${API_BASE}/delete/${id}`, {
    method: "DELETE",
  });
  return await response.json();
};

// Enhance text with AI
export const enhanceText = async (text) => {
  // This will correctly request /api/tasks/enhance
  const response = await fetch(`${API_BASE}/enhance`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  return await response.json();
};