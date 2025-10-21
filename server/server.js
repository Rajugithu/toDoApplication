import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";
import connectDB from "./config/database.js";

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

app.use(cors({
    origin: ["https://tod-task-list.netlify.app/"]
}));
app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.get('/',(req, res)=>{
    res.send({
        activeStatus:true,
        error:false
    })
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));