const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const helpers = require('./helpers');

const salts = 10;

// Get all users 
const getUsers = (req,res) => helpers.getItems(req,res,User);

// Get one user by id 
const getUserById = (req,res) => helpers.getItemById(req,res,User);

// Delete a single user by id
const deleteUserById = (req,res) => helpers.deleteItemById(req,res,User); 

// Update a single user by id 
const putUserById = (req,res) => helpers.putItemById(req,res,User);

// Handle user registration
const register = async (req,res) => {
	const { username, password } = req.body;

	console.log(req.body);
	
	try {
		// Encrypt password
		const hash = await bcrypt.hash(password, salts);
		const usr = new User({
			name: username,
			password: hash
		});

		const duplicate = await User.findOne({ name: username });

		if(!duplicate) {
			await usr.save();
		} else {
			return res.status(400).json({
				duplicate,
				success: false,
				message: "Username already taken"
			});
		}

		// Add to db
		return res.status(200).json({
			message: "new user added",
			success: true
		});

	} catch (err) {
		console.log(err);
		return handleErr(res, err);
	}
	
}

// Handle user login
const login = async (req,res) => {
	const { username, password } = req.body;
	const secret = 'testsecret';
	
	try {
		// Use bcrypt to verify if password is in db 
		const user = await User.findOne({ name: username });
		console.log(req.body);

		if(user) {
			const cmp = await bcrypt.compare(password, user.password);
			if(cmp) { // the user enters the correct password

				// create a session or send JWT token
				const token = jwt.sign({ usenrame: user.username }, secret);

				return res.status(200).json({
					token,
					success: true,
					message: "user succesfully logged in"
				});

			} else return res.status(400).json({
				user,
				success: false,
				message: "Incorrect password"
			});
		} else return res.status(400).json({
			user,
			success: false,
			message: "No such username"
		});

	} catch (error) {
		console.log(error);
		return handleErr(res, error);
	}
	
}

module.exports = { register, login, getUsers, getUserById, deleteUserById, putUserById };

