const API_BASE = "http://localhost:5000/api/tasks";

// Get all tasks
export const fetchTasks = async () => {
  const response = await fetch(API_BASE);
  return await response.json();
};

// Add new task
export const createTask = async (taskData) => {
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
  const response = await fetch(`${API_BASE}/delete/${id}`, {
    method: "DELETE",
  });
  return await response.json();
};

// Enhance text with AI
export const enhanceText = async (text) => {
  const response = await fetch(`${API_BASE}/enhance`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  return await response.json();
};