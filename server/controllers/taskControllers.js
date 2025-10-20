import Task from '../models/Task.js';

// Add Task
export const addTask = async (req, res) => {
  try {
    const { title, desc } = req.body;
    
    if (!title || !desc) {
      return res.status(400).json({ message: "Title and description are required" });
    }

    const newTask = new Task({
      title,
      desc
    });

    const savedTask = await newTask.save();
    res.status(201).json({ 
      message: "Task added successfully", 
      task: savedTask 
    });
  } catch (error) {
    console.error("Error adding task:", error);
    res.status(500).json({ 
      message: "Error adding task", 
      error: error.message 
    });
  }
};

// Update Task
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, desc } = req.body;

    if (!title || !desc) {
      return res.status(400).json({ message: "Title and description are required" });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, desc },
      { new: true, runValidators: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ 
      message: "Task updated successfully", 
      task: updatedTask 
    });
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ 
      message: "Error updating task", 
      error: error.message 
    });
  }
};

// Delete Task
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ 
      message: "Task deleted successfully" 
    });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ 
      message: "Error deleting task", 
      error: error.message 
    });
  }
};

// Get All Tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 }); // Newest first
    res.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ 
      message: "Error fetching tasks", 
      error: error.message 
    });
  }
};