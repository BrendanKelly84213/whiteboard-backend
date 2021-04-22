const Task = require('../models/task');
const helpers = require('./helpers');

// Post a task 
const createTask = (req,res) => helpers.createItem(req,res,Task);

// Get all tasks 
const getTasks = (req,res) => helpers.getItems(req,res,Task);

// Get one task by id 
const getTaskById = (req,res) => helpers.getItemById(req,res,Task);

// Delete a single task by id
const deleteTaskById = (req,res) => helpers.deleteItemById(req,res,Task); 

// Update a single task by id 
const putTaskById = (req,res) => helpers.putItemById(req,res,Task);

module.exports = { createTask, getTasks, getTaskById, deleteTaskById, putTaskById };
