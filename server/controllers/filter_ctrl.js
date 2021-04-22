const Filter = require('../models/filter');
const helpers = require('./helpers');

// Post a filter 
const createFilter = (req,res) => helpers.createItem(req,res,Filter);

// Get all filters 
const getFilters = (req,res) => helpers.getItems(req,res,Filter);

// Get one filter by id 
const getFilterById = (req,res) => helpers.getItemById(req,res,Filter);

// Delete a single filter by id
const deleteFilterById = (req,res) => helpers.deleteItemById(req,res,Filter); 

// Update a single filter by id 
const putFilterById = (req,res) => helpers.putItemById(req,res,Filter);

module.exports = { createFilter, getFilters, getFilterById, deleteFilterById, putFilterById };
