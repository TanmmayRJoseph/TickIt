import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTopic = () => {
  const [user, setUser] = useState({
    title: "",
    description: "",
    completed: false,
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/CreateNewTask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Failed to create task");
      }

      const data = await response.json();
      console.log(data);
      setUser({ title: "", description: "", completed: false });
      navigate("/");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-[90vh] bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-screen max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">
          Add a New Topic
        </h2>
        <div className="mb-4">
          <label
            htmlFor="topic"
            className="block text-gray-700 font-medium mb-2"
          >
            Topic
          </label>
          <input
            required
            type="text"
            name="title"
            id="topic"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter the topic"
            value={user.title}
            onChange={(e) => setUser({ ...user, title: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            required
            name="description"
            id="description"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter a description"
            value={user.description}
            onChange={(e) =>
              setUser({ ...user, description: e.target.value })
            }
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTopic;
