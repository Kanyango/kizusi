'use strict';

module.exports = function(app , mongoose){

	var reserveSchema = new mongoose.Schema({
		
       //user       : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
		dateCreated : {type : Date,default: Date.now()},
		client_name : {type: String},
		client_dl   : {type: String},
		client_phone : {type: String},
		client_email : {type: String},
		rent_start : {type: String},
		rent_end   : {type: String},
		vehicle    : {type: String},
		plate      : {type: String},
		total      : {type: String},
		rent_by    : {type: String},
		return_date : {type: String},
		overdue    : {type: String}
	});
	app.db.model('Reserve' , reserveSchema);
  };