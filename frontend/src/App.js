import "./App.css";
import { ALL_TASKS } from "./constants/taskConstant";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [allTask, setAllTasks] = useState(ALL_TASKS);
  const [addTaskModal, setAddTaskModal] = useState(false);
  const todoTasks = allTask.filter((eachTask) => eachTask.status === "TODO");
  const inprogressTasks = allTask.filter(
    (eachTask) => eachTask.status === "IN PROGRESS"
  );
  const doneTasks = allTask.filter((eachTask) => eachTask.status === "DONE");

  const editTask = (updatedTask) => {
    console.log("udpatedtask", updatedTask);

    setAllTasks((prev) => {
      console.log("prev", prev, updatedTask);
      return prev.map((allPrevTask) =>
        allPrevTask.id === updatedTask.id ? updatedTask : allPrevTask
      );
    });
  };
  const removeTask = (id) => {
    const deletedTask = allTask.filter((eachTask) => eachTask.id !== id);
    setAllTasks(deletedTask);
  };

  const setOpenNewTaskModal = () => {
    setAddTaskModal(!addTaskModal);
  };
  const addNewTask = (newTask) => {
    console.log("newtasssssss", newTask);
    console.log("this is addtask!");
    setAllTasks((prev) => [...prev, newTask]);
  };

  return (
    <>
      <Navbar />
      <button
        className=" bg-blue-500 text-white px-12 py-2 mx-10 mt-8 rounded-md"
        onClick={setOpenNewTaskModal}
      >
        Add Task
      </button>
      {addTaskModal && (
        <AddTask
          addNewTask={addNewTask}
          setOpenNewTaskModal={setOpenNewTaskModal}
        />
      )}
      <div className="flex justify-between items-center m-10 border-b-2 border-x-2 p-4 rounded-md">
        <div>
          <span>Search: </span>
          <input
            type="text"
            placeholder="Search..."
            className="border-2 border-gray-200 w-96 rounded-md p-1"
          />
        </div>
        <div>
          Sort By:
          <select name="sort" id="sorting">
            <option value="recent">Recent</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
      <div className="flex gap-5 m-10 ">
        <div className="flex flex-col basis-1/3 gap-6 border-2 border-slate-200 rounded-md p-4">
          <h1 className="bg-blue-500 text-white text-lg p-1 font-semibold">
            TODO
          </h1>
          {todoTasks.map((eachTask) => (
            <Card
              eachTask={eachTask}
              key={eachTask.id}
              removeTask={removeTask}
              editTask={editTask}
            />
          ))}
        </div>
        <div className="flex flex-col basis-1/3 gap-6 border-2 border-slate-200 rounded-md p-4">
          <h1 className="bg-blue-500 text-white text-lg p-1 font-semibold">
            IN PROGRESS
          </h1>
          {inprogressTasks.map((eachTask) => (
            <Card
              eachTask={eachTask}
              key={eachTask.id}
              removeTask={removeTask}
              editTask={editTask}
            />
          ))}
        </div>
        <div className="flex flex-col basis-1/3 gap-6 border-2 border-slate-200 rounded-md p-4">
          <h1 className="bg-blue-500 text-white text-lg p-1 font-semibold">
            DONE
          </h1>
          {doneTasks.map((eachTask) => (
            <Card
              eachTask={eachTask}
              key={eachTask.id}
              removeTask={removeTask}
              editTask={editTask}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
