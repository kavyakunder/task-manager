import React, { useState } from "react";

function EditModal({ isOpen, onClose, task, editTask }) {
  const [editTaskData, setEditTaskData] = useState({
    taskName: task.taskName,
    description: task.description,
  });

  function handleEditTask(e) {
    console.log("E", e);
    const { name, value } = e.target;
    console.log("xjshdchs", name, value);
    setEditTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  const handleSave = () => {
    console.log("xdlass", { ...task, ...editTask });
    editTask({ ...task, ...editTaskData });
    onClose();
  };
  const handleCancel = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-5 rounded-md shadow-md w-1/3 h-96 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold mb-4">Edit Task</h1>

          <h2 className="text-lg font-bold text-gray-600">Title</h2>
          <input
            type="text"
            value={editTaskData.taskName}
            name="taskName"
            className="border-b-2 mb-5"
            onChange={(e) => handleEditTask(e)}
          />

          <h2 className="text-lg font-bold text-gray-600">Description</h2>

          <input
            type="text"
            value={editTaskData.description}
            name="description"
            className="border-b-2"
            onChange={(e) => handleEditTask(e)}
          />
        </div>
        <div className="flex justify-end mt-4 gap-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md "
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded-md"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
