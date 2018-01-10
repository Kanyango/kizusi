
'use strict';
var mongoose = require('mongoose');


var rent_out = {

	create : function(req , res , next)
	{
		var fieldsToSet = {

			cname            : req.body.cname,
			natId            : req.body.id,
		  mail             : req.body.mail,
			phone            : req.body.phone,
			careg            : req.body.careg,
		};
    
		
		req.app.db.models.RentOut.create(fieldsToSet , 
			function(err ,  docs){

				if(err)
				{
					return next(err);
				}
				res.status(200).json(docs);
			});
	},
	read : function(req , res , next)
	{
		
		req.app.db.models.RentOut.find({},
		    function(err , docs)
			{
				if(err)
				{
					return next(err);
				}
				res.status(200).json(docs);
			});
	},
	
	not_create: function(req, res, next)
	{ 
		var fieldsToSet = { 
				    notification: req.body.notification
				  };
    
		
		req.app.db.models.Notifications.create(fieldsToSet , 
			function(err ,  docs){

				if(err)
				{
					return next(err);
				}
				res.status(200).json(docs);
			});
	},
	not_read: function(req, res, next)
	{ 
		
		req.app.db.models.Notifications.find({} , 
			function(err ,  docs){

				if(err)
				{
					return next(err);
				}
				res.status(200).json(docs);
			});
	},
	not_put: function(req, res, next)
	{ 
		var id = req.params.id;
		var fieldsToSet =
		{
			notification: req.body.notification
		};

		var options = { new : true };

		req.app.db.models.Notifications.findByIdAndUpdate(
			mongoose.Types.ObjectId(id) , fieldsToSet ,
			options , function(err , docs){
				if(err)
		    	{
		    		return next(err);
		    	}
			 res.status(200).json(docs);
			});
	}
		
}
module.exports = rent_out;
