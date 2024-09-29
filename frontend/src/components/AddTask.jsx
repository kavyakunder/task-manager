import React, { useState } from "react";

function AddTask({ addNewTask, setOpenNewTaskModal }) {
  const [addTaskData, setAddTaskData] = useState({
    taskName: "",
    description: "",
    status: "",
  });

  function handleOnChangeTask(e) {
    console.log("event is", e.target.value, e.target.name);
    const { name, value } = e.target;
    setAddTaskData((prev) => {
      console.log("prev", prev, addTaskData);
      return {
        id: new Date().getTime(),
        ...prev,

        [name]: value,
        createdAt: new Date().toLocaleString(),
      };
    });
  }

  function handleAddTask() {
    addNewTask(addTaskData);
    setOpenNewTaskModal();
  }

  function handleCancel() {
    setOpenNewTaskModal();
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-5 rounded-md shadow-md w-1/3 h-96 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold mb-4">Add Task</h1>

          <h2 className="text-lg font-bold text-gray-600">Title</h2>
          <input
            type="text"
            value={addTaskData.taskName}
            name="taskName"
            className="border-b-2 mb-5"
            onChange={(e) => handleOnChangeTask(e)}
          />

          <h2 className="text-lg font-bold text-gray-600">Description</h2>

          <input
            type="text"
            value={addTaskData.description}
            name="description"
            className="border-b-2"
            onChange={(e) => handleOnChangeTask(e)}
          />
        </div>

        <h2 className="text-lg font-bold text-gray-600">Status</h2>

        <select
          name="status"
          id=""
          onChange={(e) => handleOnChangeTask(e)}
          value={addTaskData.status}
        >
          <option value="TODO">TODO</option>
          <option value="IN PROGRESS">IN PROGRESS</option>
          <option value="DONE">DONE</option>
        </select>
        <div className="flex justify-end mt-4 gap-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md "
            onClick={handleAddTask}
          >
            Add
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

export default AddTask;
