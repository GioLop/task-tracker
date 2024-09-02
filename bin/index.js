#!/usr/bin/env node

const addTaskController = require("../src/controllers/addTask.controller");
const deleteTaskController = require("../src/controllers/deleteTask.controller");
const listTasksController = require("../src/controllers/listTasks.controller");
const markTaskDoneController = require("../src/controllers/markTaskDone.controller");
const markTaskInProgressController = require("../src/controllers/markTaskInProgress.controller");
const rejectOptionController = require("../src/controllers/rejectOption.controller");
const updateTaskController = require("../src/controllers/updateTask.controller");

const [option, ...args] = process.argv.slice(2);

const main = async () => {
  switch (option) {
    case "add":
      await addTaskController(args);
      break;
    case "update":
      await updateTaskController(args);
      break;
    case "delete":
      await deleteTaskController(args);
      break;
    case "mark-in-progress":
      await markTaskInProgressController(args);
      break;
    case "mark-done":
      await markTaskDoneController(args);
      break;
    case "list":
      await listTasksController(args);
      break;
    default:
      rejectOptionController(option);
      break;
  }
};

main();