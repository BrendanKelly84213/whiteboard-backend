const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Shift = new Schema({
	title: { type: String, require: true },
	//Come up with more down the road 
});

module.exports = mongoose.model('shifts', Shift);
