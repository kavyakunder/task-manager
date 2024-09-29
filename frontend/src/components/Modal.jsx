import React from "react";

function Modal({ isOpen, onClose, task }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-5 rounded-md shadow-md w-1/3 h-96 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold mb-4">Task Details</h1>
          <h2 className="text-lg font-bold">Title: {task.taskName}</h2>
          <p>Description: {task.description}</p>
          <p>Status: {task.status}</p>
          <p className="mt-5">Created at: {task.createdAt}</p>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
