'use strict';
var mongoose = require('mongoose');


var reserve = {

	create : function(req , res , next)
	{
		var fieldsToSet = {

			client_name      : req.body.cname,
			clent_dl         : req.body.dl,
			client_email     : req.body.mail,
			client_phone     : req.body.phone,
			rent_start       : req.body.start_date,
			rent_end          : req.body.end,
			vehicle          : req.body.car,
			total            : req.body.total

		};
		var options = { new : true };
		req.app.db.models.Reserve.create(fieldsToSet , 
			function(err ,  docs){

				if(err)
				{
					return next(err);
				}
				req.app.db.models.Car.update({ _id : mongoose.Types.ObjectId(req.body.car)} , 
			    {status :'reserved'}, options,
			function(err , cust){
				if(err)
				{
					console.log('Could not push');
				}
			})
				res.status(200).json(docs);
			});
	},
	update : function(req , res , next)
	{
		var id = req.body._id;
		var fieldsToSet = 
		{
			client_name  :  req.body.client_name,
		        client_dl    :  req.body.client_dl,
		        client_phone :  req.body.client_phone,
		        client_email :  req.body.client_email,
		        rent_start   : req.body.client_dl,
		        vehicle      : req.body.vehicle
		};

		var options = { new : true };

		req.app.db.models.Reserve.findByIdAndUpdate(
			mongoose.Types.ObjectId(id) , fieldsToSet ,
			options , function(err , docs){
				if(err)
		    	{
		    		return next(err);
		    	}
			 res.status(200).json(docs);
			});
	  },
	returnd: function(req , res , next)
	{
		var id = req.body._id;
		var fieldsToSet = 
		{
			return_date : req.body.return_date,
			overdue     : req.body.overdue
		};

		var options = { new : true };

		req.app.db.models.Reserve.findByIdAndUpdate(
			mongoose.Types.ObjectId(id) , fieldsToSet ,
			options , function(err , docs){
				if(err)
		    	{
		    		return next(err);
		    	}
		    	req.app.db.models.Car.update({plate_no: req.body.vehicle} , 
			    {status :'available'}, options,
			function(err , cust){
				if(err)
				{
					console.log('Could not push');
				}
			})
			 res.status(200).json(docs);
			});
	  },
	read : function(req , res , next)
	{
		
		req.app.db.models.Reserve.find({},
		    function(err , docs)
			{
				if(err)
				{
					return next(err);
				}
				res.status(200).json(docs);
			});
	},
	remove : function(req , res , next)
	{
		
		
	  	var id = mongoose.Types.ObjectId(req.body.del);

	  	req.app.db.models.Reserve.findByIdAndRemove(req.params.id, 
	  		function(err , info){
	  			if(err)
	  			{
	  				return next(err);
	  			}
	  			res.status(200).json(info);
	  		});

	  }
	  
}
module.exports = reserve;
