const { getAllTasks, getTasksByStatus } = require("../model/tasks.model");
const { STATUS } = require("../shared/constant");

module.exports = async (args) => {
  if (args.length < 1) {
    try {
      const tasks = await getAllTasks();
      console.log(tasks);  
    } catch (error) {
      console.log(error);
    }
  } else if (args.length === 1) {
    const [ status ] = args;

    if (
      status === STATUS.DONE || 
      status === STATUS.TODO || 
      status === STATUS.IN_PROGRESS
    ) {
      try {
        const tasks = await getTasksByStatus(status);
        console.log(tasks);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(`The status ${status} is not a valid option please try ${STATUS.TODO}, ${STATUS.IN_PROGRESS} or ${STATUS.DONE}`);
    }
  }
};
