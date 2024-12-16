import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const SingleTopic = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the server
  const getTasks = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/getTasks");
      if (!response.ok) {
        throw new Error(`Failed to fetch tasks: ${response.statusText}`);
      }
      const data = await response.json();
      setTasks(data.data || []); // Adjust based on actual API response structure
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  
  // Handle task deletion
  const handleDelete = async (_id) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/deleteTask/${_id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        // Remove deleted task from the local state
        setTasks((prevTasks) => prevTasks.filter((task) => task._id !== _id));
      } else {
        console.error("Failed to delete task");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

 
  // Fetch tasks on component mount
  useEffect(() => {
    getTasks();
  }, []);
  

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Task Manager
      </h1>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div
            key={task._id}
            className="w-[70vw] sm:w-3/4 lg:w-1/2 mx-auto p-6 mb-6 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {task.title}
            </h2>
            <p className="text-gray-600 mb-4">{task.description}</p>
            <div className="flex items-center gap-4 mb-4">
              <Checkbox
                {...label}
                checked={task.completed || false}
                onChange={() => handleToggleCompleted(task)}
              />
              <span className={`text-gray-700 ${task.completed ? "line-through" : ""}`}>
                Mark as Completed
              </span>
            </div>
            <div className="flex gap-4">
              <Link to={`/UpdateTopic/${task._id}`}>
                <button className="bg-blue-600 text-white hover:bg-blue-700 p-2 rounded-md">
                  Edit Task
                </button>
              </Link>
              <button
                onClick={() => handleDelete(task._id)}
                className="bg-red-600 text-white hover:bg-red-700 p-2 rounded-md"
              >
                Delete Task
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 mt-6 text-lg">
          No tasks available
        </p>
      )}
    </div>
  );
};

export default SingleTopic;
