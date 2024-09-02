const { hasValidLength, isEmptyObject } = require("../lib/data.utils");
const { deleteTask, getTaskById } = require("../model/tasks.model");

module.exports = async (args) => {
  const [ id ] = args;

  if (!hasValidLength(args, 1)) {
    console.log(`The delete option accepts and just accepts one argument`);
  } else {
    try {
      const task = await getTaskById(id);
  
      if (isEmptyObject(task)) {
        console.log(`Task does not exist (ID: ${id})`);
        return
      }
  
      await deleteTask(id);
      console.log(`Task succesfully deleted (ID: ${id})`);
    } catch (error) {
      console.log(error);
    }
  }
};
