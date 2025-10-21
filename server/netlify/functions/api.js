// /ToDo-App/server/netlify/functions/api.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import serverless from "serverless-http";
import taskRoutes from "../../routes/taskRoutes.js";
import connectDB from "../../config/database.js";  

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

app.use(cors());
app.use(express.json());


const router = express.Router();
router.use("/tasks", taskRoutes);

// Mount the router under the /api prefix
app.use("/api", router);


// Export the handler for Netlify
export const handler = serverless(app);