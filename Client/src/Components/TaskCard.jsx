// src/components/TaskCard.jsx
import React from "react";

export default function TaskCard({ task, updateTask, deleteTask }) {
  return (
    <div className="bg-white p-4 mb-3 rounded-lg shadow">
      <h2 className="font-semibold text-lg">{task.title}</h2>
      <p className="text-gray-600">{task.desc}</p>
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => updateTask(task.id)}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
