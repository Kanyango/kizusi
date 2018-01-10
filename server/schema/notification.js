'use strict';

module.exports = function(app , mongoose){

	var notsSchema = new mongoose.Schema({
		
       //user       : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
		dateCreated : {type : Date,default: Date.now()},
		notification  {type : String}
	});
	app.db.model('Notifications' , notsSchema);
};
