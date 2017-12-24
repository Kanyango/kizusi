'use strict';

module.exports = function(app , mongoose){

	var rentOutSchema = new mongoose.Schema({
		
       //user       : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
		dateCreated : {type : Date,default: Date.now()},
		came  : {type: String},
		careg : {type: String},
		phone : {type: String},
		mail  : {type: String},
    natId  : {type: String},
		
	});
	app.db.model('RentOut' , rentOutSchema);
  };
