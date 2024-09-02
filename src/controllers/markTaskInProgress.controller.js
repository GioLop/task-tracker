const { hasValidLength, isEmptyObject } = require("../lib/data.utils");
const { getTaskById, updateTask } = require("../model/tasks.model");
const { STATUS } = require("../shared/constant");

module.exports = async (args) => {
  if (!hasValidLength(args, 1)) {
    console.log(`The mark-in-progress option accepts and just accepts one argument`);
  } else {
    const [ id ] = args;

    try {
      const task = await getTaskById(id);
    
      if (isEmptyObject(task)) {
        console.log(`Task does not exist (ID: ${id})`);
        return
      }

      if (task.status === STATUS.IN_PROGRESS) {
        console.log(`Task current status is ${STATUS.IN_PROGRESS} (ID: ${id})`);
        return
      }
      
      await updateTask(id, { status: STATUS.IN_PROGRESS });
      console.log(`Task status updated to ${STATUS.IN_PROGRESS} successfully (ID: ${id})`);  
    } catch (error) {
      console.log(error);
    }
  }
};
