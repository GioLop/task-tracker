const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');
const { getCurrentDateUTC } = require('../lib/date.utils');
const { STATUS } = require('../shared/constant');

const SOURCE = path.join('.','/', 'data.json');
const STANDARD = 'utf8';

const checkFileExistence = async path => !!(await fs.stat(path).catch(e => false));

const readFile = async () => {
  const fileExists = await checkFileExistence (path.resolve(__dirname, SOURCE));
  let data = {};
  
  if (!fileExists) {
    return data; 
  }
  
  data = JSON.parse(
    await fs.readFile(
      path.resolve(__dirname, SOURCE), 
      STANDARD
    )
  );

  return data;
};

const writeFile = async (jsonObj) => {
  await fs.writeFile(
    path.resolve(__dirname, SOURCE), 
    JSON.stringify(jsonObj), 
    STANDARD
  );
};

const addTask = async (description) => {
  const id = nanoid();
  const newTask = {
    id,
    description,
    status: STATUS.TODO,
    createdAt: getCurrentDateUTC(),
    updatedAt: getCurrentDateUTC(),
  };
  
  const data = await readFile();
  console.log(data);
  data[id] = newTask;
  
  await writeFile(data);
  return id;
};

const updateTask = async (id, taskChanges) => {
  const data = await readFile();
  const tasktoUpdate = data[id];
  const updatedAt = getCurrentDateUTC();
  
  data[id] = { 
    ...tasktoUpdate,
    ...taskChanges
  };
  
  await writeFile(data);
  return id;
};

const deleteTask = async (id) => {
  let data = await readFile();
  delete data[id];
  
  await writeFile(data);
  return id;
};

const getTaskById = async (id) => {
  const data = await readFile();
  return { ...data[id] };
};

const getAllTasks = async () => {
  const data = await readFile();
  return [...Object.values(data)];
};

const getTasksByStatus = async (status) => {
  const data = await getAllTasks();
  return data.filter((task) => task.status === status);
};

module.exports = {
  addTask,
  updateTask,
  deleteTask,
  getTaskById,
  getAllTasks,
  getTasksByStatus
};
