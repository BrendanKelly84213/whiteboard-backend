const Shift = require('../models/shift');
const helpers = require('./helpers.js');

// Post a task 
const createShift = (req,res) => helpers.createItem(req,res,Shift);

// Get all tasks 
const getShifts = (req,res) => helpers.getItems(req,res,Shift);

// Get one task by id 
const getShiftById = (req,res) => helpers.getItemById(req,res,Shift);

// Delete a single task by id
const deleteShiftById = (req,res) => helpers.deleteItemById(req,res,Shift); 

// Update a single task by id 
const putShiftById = (req,res) => helpers.putItemById(req,res,Shift);

module.exports = { createShift, getShifts, getShiftById, deleteShiftById, putShiftById };
