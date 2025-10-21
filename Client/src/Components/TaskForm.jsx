import React from "react";

export default function TaskForm({ title, setTitle, desc, setDesc, addTask, enhanceTask, loading }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md mb-6">
      <input
        type="text"
        placeholder="Task title"
        className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task description"
        className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="3"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <div className="flex justify-between">
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Add Task
        </button>
        <button
          onClick={enhanceTask}
          disabled={loading || !desc}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:bg-gray-400 transition duration-200"
        >
          {loading ? "Enhancing..." : "Improve with AI"}
        </button>
      </div>
    </div>
  );
}