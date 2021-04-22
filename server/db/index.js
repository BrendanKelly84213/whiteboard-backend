const mongoose = require('mongoose');

mongoose.connect(
	'mongodb://brendan:15161516@localhost/admin',
	{ useNewUrlParser: true }
).catch(e => console.log("error connecting ", e));

const db = mongoose.connection;

module.exports = db;
