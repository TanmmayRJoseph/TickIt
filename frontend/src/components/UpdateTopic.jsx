import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateTopic = () => {
  const { id } = useParams(); // Fetch the task ID from the URL
  const navigate = useNavigate();

  const [task, setTask] = useState({ title: "", description: "", completed: false });

  useEffect(() => {
    // Fetch the task details
    const fetchTask = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/getTask/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch task details");
        }
        const data = await response.json();
        setTask(data.data); // Adjust based on your API response structure
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };

    fetchTask();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/updateTask/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        throw new Error("Failed to update task");
      }

      // Navigate back to the list or show a success message
      navigate("/");
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Edit Task</h1>
      <div className="w-[70vw] sm:w-3/4 lg:w-1/2 mx-auto">
        <label className="block text-lg font-semibold mb-2">Title</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleInputChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <label className="block text-lg font-semibold mb-2">Description</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleInputChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        ></textarea>
        <button
          onClick={handleUpdate}
          className="bg-blue-600 text-white hover:bg-blue-700 p-2 rounded-md"
        >
          Update Task
        </button>
      </div>
    </div>
  );
};

export default UpdateTopic;
