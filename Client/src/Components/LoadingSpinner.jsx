// src/components/LoadingSpinner.jsx
import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-2">
      <div className="w-6 h-6 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
}
