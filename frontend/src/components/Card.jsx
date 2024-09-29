import React, { useState } from "react";
import Modal from "./Modal";
import EditModal from "./EditModal";
function Card({ eachTask, removeTask, editTask, onDragStart }) {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const handleViewDetails = () => {
    setIsViewModalOpen(true);
  };

  const handleEditOpenModal = () => {
    setIsEditModalOpen(true);
  };

  const handleEditCloseModal = () => {
    setIsEditModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsViewModalOpen(false);
  };
  return (
    <>
      <div
        className="bg-blue-200 p-5 rounded-md"
        key={eachTask.id}
        draggable
        onDragStart={(e) => onDragStart(e, eachTask)}
      >
        <h2 className="text-lg font-bold">{eachTask.taskName}</h2>
        <p>{eachTask.description}</p>
        <p className="mt-5">Created at: {eachTask.createdAt}</p>
        <div className="flex justify-end gap-2 mt-4">
          <button
            className="bg-red-400 text-white p-2 rounded-md"
            onClick={() => removeTask(eachTask._id)}
          >
            Delete
          </button>
          <button
            className="bg-blue-400 text-white p-2  rounded-md"
            onClick={handleEditOpenModal}
          >
            Edit{" "}
          </button>
          <button
            className="bg-blue-600 text-white p-2 rounded-md"
            onClick={handleViewDetails}
          >
            View Details
          </button>
        </div>
      </div>
      <Modal
        isOpen={isViewModalOpen}
        onClose={handleCloseModal}
        task={eachTask}
      />
      <EditModal
        isOpen={isEditModalOpen}
        onClose={handleEditCloseModal}
        task={eachTask}
        editTask={editTask}
      />
    </>
  );
}

export default Card;
