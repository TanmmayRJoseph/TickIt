import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Task from "./models/task.model.js";
import morgan from "morgan";
import cors from "cors";
import { body, validationResult } from "express-validator";

dotenv.config(); // Load environment variables

connectDB(); // Connect to the database

const app = express(); // Create an Express app

// CORS options
const corsOptions = {
  origin: "http://localhost:5173", // Frontend origin URL
  methods: "GET,POST,PUT,DELETE", // Allowed methods
  credentials: true, // Enable credentials for cross-origin requests
};

app.use(cors(corsOptions)); // Enable CORS
app.use(express.json()); // Enable JSON parsing
app.use(morgan("dev")); // Enable request logging
app.use(express.urlencoded({ extended: true })); // Enable URL-encoded parsing

app.get("/", (req, res) => {
  // Home route
  res.send("<h1>Server is running....</h1>");
});
// Route: Get all tasks
app.get("/api/getTasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({
      success: true,
      message: "Tasks fetched successfully",
      data: tasks,
    });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching tasks",
      error: error.message,
    });
  }
});

// Route: Create a new task
app.post(
  "/api/CreateNewTask",
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("description").notEmpty().withMessage("Description is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { title, description } = req.body;

      const task = await Task.create({ title, description });
      res.status(201).json({
        success: true,
        message: "Task created successfully",
        data: task,
      });
    } catch (error) {
      console.error("Error creating task:", error);
      res.status(500).json({
        success: false,
        message: "Error creating task",
        error: error.message,
      });
    }
  }
);

// Route: Delete a task
app.delete("/api/deleteTask/:id", async (req, res) => {
  try {
    const taskId = req.params.id; // Get the task ID from the request parameters
    console.log("Task ID received:", taskId); // Ensure taskId is correct

    const task = await Task.findByIdAndDelete(taskId); // Find and delete the task

    if (!task) {
      // If the task is not found
      return res.status(404).json({
        success: false,
        message: "Task not found", // Return an error response
      });
    }

    res.status(200).json({
      // Return a success response
      success: true,
      message: "Task deleted successfully", // Return a success message
      task: task, // Return deleted task data (optional)
    });
  } catch (error) {
    // Handle errors
    console.error("Error deleting task:", error);
    res.status(500).json({
      success: false, // Return an error response
      message: "Error deleting task", // Return an error message
      error: error.message, // Return the error message
    });
  }
});

// Route: Update a task
app.put("/api/updateTask/:id", async (req, res) => {
  const { id } = req.params; // Get the task ID from the request parameters
  const { title, description, completed } = req.body; // Get the updated task data

  try {
    console.log(`Updating task with ID: ${id}`, req.body); // Log the task ID
    const result = await Task.findByIdAndUpdate(
      // Find and update the task
      id,
      { title, description, completed },
      { new: true } // Return the updated document
    );
    if (!result) {
      // If the task is not found
      return res.status(404).send({ message: "Task not found" }); // Return an error response
    }
    res.send({ message: "Task updated successfully", data: result }); // Return a success responseif the task is found
  } catch (error) {
    console.error("Error updating task:", error); // Log the error
    res.status(500).send({ message: "Internal Server Error" }); // Return an error response
  }
});

// Start the server
const PORT = process.env.PORT || 3000; // Get the port from environment variables
app.listen(PORT, () => {
  // Start the server
  console.log(`Server is running on http://localhost:${PORT}`);
});
