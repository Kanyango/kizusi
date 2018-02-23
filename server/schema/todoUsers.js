
'use strict';

var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

module.exports = function(app , mongoose)
{
	var userSchema = new mongoose.Schema({
    username : {type: String , unique: true , lowercase: true},
		email    : {type: String },
		password : {ype: string},
		phone    : {type: Number , unique: true},
		timeCreated : {type: Date , default: Date.now}
	});	
	/*userSchema.methods.setPassword = function(password){
		this.salt = crypto.randomBytes(16).toString('hex');
		this.hash = crypto.pbkdf2Sync(password , this.salt , 1000 , 64).toString('hex');
	};
	userSchema.methods.validatePassword = function(password) {
     var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
     return this.hash === hash;
   };*/
	/*userSchema.methods.generateJwt  =  function(){

		var today = new Date();
		var exp = new Date(today);
        exp.setDate(today.getDate() + 60);

        return jwt.sign({_id: this._id ,
                          email : this.email ,
                          exp: parseInt(exp.getTime() / 1000), } , app.config.secret );
	}; */
    app.db.model('ToDoUser', userSchema);

};
