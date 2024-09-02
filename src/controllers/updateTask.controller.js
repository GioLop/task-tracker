const { hasValidLength, isEmptyObject } = require("../lib/data.utils");
const { isNumeric } = require("../lib/num.utils");
const { getTaskById, updateTask } = require("../model/tasks.model");

module.exports = async (args) => {
  const [ id, description ] = args;

  if (!hasValidLength(args, 2)) {
    console.log(`The update option accepts and just accepts two arguments`);
  } else if (isNumeric(id) || isNumeric(description)) {
    console.log(`The arguments should be strings`);
  } else {
    try {
      const task = await getTaskById(id);
    
      if (isEmptyObject(task)) {
        console.log(`Task does not exist (ID: ${id})`);
      } else {
        await updateTask(id, { description });
        console.log(`Task updated successfully (ID: ${id})`);  
      }
    } catch (error) {
      console.log(error);
    }
  }
};