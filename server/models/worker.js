const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Worker = new Schema({
	name: String,
	// password: String
	// Add more to this later
	// Not totally sure where I want to go with this yet
});

module.exports = mongoose.model('workers', Worker);
