'use strict';

module.exports = function(app , mongoose){

	var carSchema = new mongoose.Schema({
		
       //user       : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
		dateCreated : {type : Date,default: Date.now()},
		model        : {type : String},
		plate_no    : {type: String},
		status      : {type: String},
		img         : {data: Buffer, contentType: String},
		year        : {type: String},
		capacity    : {type: String},
		fuel        : {type: String},
		engine      : {type: String},
		drive       : {type: String},
		steering     : {type: String},
		photo       : {type: String},
		pricing     : [{desc: String, amount: String}]	
	});
	app.db.model('Car' , carSchema);
};
