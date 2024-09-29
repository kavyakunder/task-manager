const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const dotenv = require("dotenv");

dotenv.config();

const ALL_TASKS = require("./taskConstant");

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  return res.send("Hello from world!");
});

const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["TODO", "IN PROGRESS", "DONE"],
    default: "TODO",
  },
});
const TaskManager = mongoose.model("task", taskSchema);

mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    console.log("MongoDB connected!");

    const tasksCount = await TaskManager.countDocuments();
    if (tasksCount === 0) {
      console.log("No tasks in the database, inserting predefined tasks...");

      await TaskManager.insertMany(ALL_TASKS);
      console.log("Predefined tasks inserted successfully!");
    }
  })
  .catch((err) => console.log("Mongodb error!", err));

app.get("/", (req, res) => {
  res.send("Task manager server is running up and running");
});
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await TaskManager.find();
    console.log("tasks in backend", tasks);
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving tasks", error: err });
  }
});

app.post("/new-task", async (req, res) => {
  try {
    const task = new TaskManager(req.body);
    console.log("the new task is", task);
    console.log("task is this", task);

    await task.save();
    res.status(201).json({ message: "New Task created successfully", task });
  } catch (err) {
    res.status(500).json({ message: "Failed to create task", error: err });
  }
});

app.delete("/delete-task/:id", async (req, res) => {
  console.log("Reeee", req, res);
  try {
    console.log("Ree", req.params);
    const deletedTask = await TaskManager.findByIdAndDelete(req.params.id);
    console.log("del", deletedTask);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    console.log("Ress", res);
    res.status(200).json({ message: "Task deleted successfully", deletedTask });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete task", error: err });
  }
});

app.put("/edit-task/:id", async (req, res) => {
  try {
    const updatedTask = await TaskManager.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task updated successfully", updatedTask });
  } catch (err) {
    res.status(500).json({ message: "Failed to update task", error: err });
  }
});

app.listen(5000, () => {
  console.log("Server started running on port 5000!");
});

// kavyakunder09;
// 2BRMZXScalBD8jEW
