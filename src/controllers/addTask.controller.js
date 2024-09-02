const { addTask } = require('../model/tasks.model');
const { isNumeric } = require('../lib/num.utils');
const { hasValidLength } = require('../lib/data.utils');

module.exports = async (args) => {
  const [ description ] = args;

  if (!hasValidLength(args, 1)) {
    console.log(`The add option accepts and just accepts one argument`);
  } else if (isNumeric(description)) {
    console.log(`The description should be a string`);
  } else {
    try {
      const id = await addTask(description);
      console.log(`Task added successfully (ID: ${id})`);
    } catch (err) {
      console.log(err);
    }
  }
};