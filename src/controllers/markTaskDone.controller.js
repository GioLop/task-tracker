const { hasValidLength, isEmptyObject } = require("../lib/data.utils");
const { getTaskById, updateTask } = require("../model/tasks.model");
const { STATUS } = require("../shared/constant");

module.exports = async (args) => {
  if (!hasValidLength(args, 1)) {
    console.log(`The mark-done option accepts and just accepts one argument`);
  } else {
    const [ id ] = args;

    try {
      const task = await getTaskById(id);
    
      if (isEmptyObject(task)) {
        console.log(`Task does not exist (ID: ${id})`);
      } else if (task.status === STATUS.DONE) {
        console.log(`Task current status is ${STATUS.DONE} (ID: ${id})`);
      } else {
        await updateTask(id, { status: STATUS.DONE });
        console.log(`Task status updated to ${STATUS.DONE} successfully (ID: ${id})`);
      }
    } catch (error) {
      console.log(error);
    }
  }
};
