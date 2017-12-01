'use strict';

module.exports = function(app , mongoose){

	var priceSchema = new mongoose.Schema({
		
       //user       : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
		car          : {type : mongoose.Schema.Types.ObjectId, ref: 'Car'},
		dateCreated  : {type : Date,default: Date.now()},                                         
		desc         : {type : String},
		amount       : {type : String}
	});
	app.db.model('Price' , priceSchema);
};