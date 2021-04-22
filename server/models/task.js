const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Task = new Schema({
	description: { type: String, require: true, unique: true },
	priority: { type: String, require: true },
	dateCreated: Date,
	shift: String,
	worker: String, 
	completed: { type: Boolean, default: false },
	inProgress: { type: Boolean, default: false }, 

	// TODO: implement:
	// recurring: String,
	// open: { type: Boolean, require: true },
	// timeEstimate: String,
});

module.exports = mongoose.model('tasks', Task);
