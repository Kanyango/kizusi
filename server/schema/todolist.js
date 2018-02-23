
module.exports = function(app , mongoose){

	var todolistSchema = new mongoose.Schema({
		
       //user       : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
		dateCreated : {type : Date,default: Date.now()},
		title : {type: string},
    owner : {type: string},
    items : [], 
    location: {type: string},
    start_time : {type: string},
    end_time : {type: string} 
  });
	app.db.model('ToDoList' , todolistSchema);
  };
