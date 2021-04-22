const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Filter = new Schema({
	priority: String, 
	shift: String,
	worker: String, 
	completed: { type: Boolean, default: false },

});

module.exports = mongoose.model('filters', Filter);
