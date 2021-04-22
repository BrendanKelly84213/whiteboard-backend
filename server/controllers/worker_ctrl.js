const Worker = require('../models/worker');
const helpers = require('./helpers.js');

const Worker = require('../models/shift');
const helpers = require('./helpers.js');

// Post a task 
const createWorker = (req,res) => helpers.createItem(req,res,Worker);

// Get all tasks 
const getWorkers = (req,res) => helpers.getItems(req,res,Worker);

// Get one task by id 
const getWorkerById = (req,res) => helpers.getItemById(req,res,Worker);

// Delete a single task by id
const deleteWorkerById = (req,res) => helpers.deleteItemById(req,res,Worker); 

// Update a single task by id 
const putWorkerById = (req,res) => helpers.putItemById(req,res,Worker);

module.exports = { createWorker, getWorkers, getWorkerById, deleteWorkerById, putWorkerById };
