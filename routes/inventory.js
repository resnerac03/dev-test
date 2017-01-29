var Router 		= require('express').Router();
var isLoggedIn 	= require('../helpers/is-logged-in');
var Inventory 	= require('../models/inventory');

Router
	.get('/inventory', isLoggedIn, function(req,res){
		var inventoryCount = Inventory.count({}).exec();
		var inventory = Inventory.find({}).sort({_id: -1}).limit(10).exec();

		inventory
			.then(function(result){
				res.render('inventory',{Inventory:result, methodStatus:'post', putData:''});
			})
	})

	.get('/inventory/:id', isLoggedIn, function(req,res){
		var inventory = Inventory.find({_id:req.params.id}).exec();

		inventory
			.then(function(result){
				console.log(result)
				res.render('inventory',{Inventory:'', methodStatus:'', putData:result});
			})
	})

	.post('/inventory', isLoggedIn, function(req,res){
		var newInventory = {
			no: req.body.itemNumber,
			name: req.body.itemName,
			description: req.body.itemDescription,
			quantity: req.body.itemQuantity
		}

		var inventory = new Inventory(newInventory);
		inventory.save(function(err){
			if (err)
				res.send('There was a problem uploading your file.');

			res.redirect('/inventory');

		})
	})

	.post('/inventory/:id', isLoggedIn, function(req,res){
		var inventory = Inventory.findById(req.params.id).exec();

		inventory
			.then(function(dataPut){
				dataPut.name = req.body.itemName;
				dataPut.description = req.body.itemDescription;
				dataPut.quantity = req.body.itemQuantity;

				dataPut.save();
			})
			.then(function(){
				res.redirect('/inventory');
			})
	})

	.get('/inventory/delete/:id', isLoggedIn, function(req,res){
		var inventory = Inventory.remove({_id:req.params.id}).exec();

		inventory
			.then(function(result){
				res.redirect('/inventory');
			})
	})

module.exports = Router;