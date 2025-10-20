import express from "express";
import { enhanceText } from "../controllers/aiController.js";
import { addTask, updateTask, deleteTask, getAllTasks } from "../controllers/taskControllers.js";

const router = express.Router();

// Task routes
router.get("/", getAllTasks);
router.post("/add", addTask);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

// AI enhancement route (only one instance)
router.post("/enhance", enhanceText);

export default router;