
module.exports = function(app , mongoose){

	var todolistSchema = new mongoose.Schema({
		
       //user       : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
		dateCreated : {type : Date,default: Date.now()},
		title : {type: String},
    owner : {type: String},
    items : [], 
    location: {type: String},
    start_time : {type: String},
    end_time : {type: String} 
  });
	app.db.model('ToDoList' , todolistSchema);
  };
