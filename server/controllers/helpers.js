// Post request  
const createItem = async (req,res,Model) => {
	const body = req.body;
	if(!body) {
		return res.status(400).json({
			success: false,
			error: 'please provide item'
		});
	}
	
	// Create a item instance from the post body
	const item = new Model(body);
	if(!item) {
		return res.status(400)
			.json({
				success:false,
				error: 'Something went wrong creating an item'
			});
	}

	try {
		// Really the only useful part of this whole function
		// Save the newly created item to mongo  
		await item.save(); 
		return res.status(200)
			.json({
				success: true,
				id: item._id,
				message: 'item added',
			});
	} catch (error) {
		console.log('failed to save item');
		return res.status(400)
			.json({
				error, 
				message: 'failed to add item',
			});
	}
}


// Get all items 
const getItems = (req,res,Model) => {
	// built in find all function comes with mongoose turns out
	Model.find({}, (err, items) => {
		if(err) {
			return res.status(400)
				.json({
					success: false,
					err
				});
		}

		return res.status(200)
			.json({
				success: true,
				data: items
			});
	});
}

const getItemById = async (req,res,Model) => {
	const id = req.params.id;
	try {
		const item = await Model.findById(id);
		return res.status(200)
			.json({
				message: "grabbed item",
				data: item
			});
	} catch (err) {
		console.log(err);
		return res.status(400)
			.json({
				err,
				message: "something went wrong, probably incorrect id"
			});
	}
}

const deleteItemById = (req,res,Model) => {
	const id = req.params.id;
	Model.findByIdAndRemove(id, (err, docs) => {
		if(err) {
			console.log(err);
			return res.status(400)
				.json({
					err,
					message: "something went wrong"
				});
		}
		return res.status(200)
			.json({
				data: docs,
				message: "removed user successfully"
			});
	});
}

const putItemById = (req,res,Model) => {
	const id = req.params.id;
	const updatedItem = req.body;
	if(!updatedItem) {
		return res.status(400).json({
			success: false,
			error: 'please provide item'
		});
	}
	
	Model.findByIdAndUpdate(id, updatedItem, (err,docs) => {
		if(err) {
			console.log(err);
			return res.status(400)
				.json({
					err,
					message: "something went wrong"
				});
		}
		return res.status(200)
			.json({
				data:docs,
				message:"successfully updated item"
			});
	});
}

module.exports = { createItem, getItems, getItemById, deleteItemById, putItemById  };
