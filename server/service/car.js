'use strict';
var mongoose = require('mongoose');
var multer = require('multer');
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');
var querystring = require('querystring');
var https       = require('https');
var username = 'kanyango';
var moment  = require('moment');
var apikey   = 'b08b2c77192e5dc068f327209015659596c3eb85cda37524729622dd0968d53e';
var cloudinary = require('cloudinary');
var nodemailer = require('nodemailer');
var google = require('googleapis');
var googleAuth = require('google-auth-library');
var send = require('gmail-send')({
//var send = require('../index.js')({
  user: 'kibesimon71@gmail.com',
  // user: credentials.user,                  // Your GMail account used to send emails
  pass: '0716281045',
  // pass: credentials.pass,                  // Application-specific password
  to:   'kibesimon71@gmail.com',
  // to:   credentials.user,                  // Send to yourself
                                           // you also may set array of recipients:                                       // [ 'user1@gmail.com', 'user2@gmail.com' ]
  // from:    credentials.user             // from: by default equals to user
  // replyTo: credentials.user             // replyTo: by default undefined
  subject: 'Driving License',
  text:    'New Customer DL',         // Plain text
  //html:    '<b>html text</b>'            // HTML
});

var car = {

	create : function(req , res , next)
	{
		var fieldsToSet = {

			model     : req.body.model,
			plate_no  : req.body.plate,
			status    : req.body.status,
			capacity  : req.body.capacity,
			fuel      : req.body.fuel,
			engine       : req.body.engine,
			steering     : req.body.steering,
			drive     : req.body.drive
		};

		req.app.db.models.Car.create(fieldsToSet ,
			function(err ,  docs){

				if(err)
				{
					return next(err);
				}
				res.status(200).json(docs);
			});
	},
	update : function(req , res , next)
	{
		var id = req.params.id;
		var fieldsToSet =
		{
			model     : req.body.model,
			plate_no  : req.body.plate_no,
			status    : req.body.status,
			capacity  : req.body.capacity,
			fuel      : req.body.fuel,
			engine       : req.body.eng,
			steering     : req.body.steer,
			drive     : req.body.drive
		};

		var options = { new : true };

		req.app.db.models.Car.findByIdAndUpdate(
			mongoose.Types.ObjectId(id) , fieldsToSet ,
			options , function(err , docs){
				if(err)
		    	{
		    		return next(err);
		    	}
			 res.status(200).json(docs);
			});
	  },
	read : function(req , res , next)
	{

		req.app.db.models.Car.find({},
		    function(err , docs)
			{
				if(err)
				{
					return next(err);
				}
				res.status(200).json(docs);
			});
	},
	reserved : function(req , res , next)
	{

		req.app.db.models.Car.find({ status: 'reserved' },
		    function(err , docs)
			{
				if(err)
				{
					return next(err);
				}
				res.status(200).json(docs);
			});
	},
	clres : function(req , res , next)
	{

		function sendMessage() {

	            // var to     = '+254726281045,+254716281045,+254726591218';
		     var cl_no    =  req.body.phone;
		     var to       = '+254726390101,' + cl_no;
		     var  Plate   =  req.body.plate_no;
		     var  Rent_Start = moment(req.body.start).format("MMM Do YY");
		     var  Return = moment(req.body.end).format("MMM Do YY");
		     var  Email = req.body.email;
		     var  Phone =  req.body.phone;
		     var nat_id = req.body.nat_id;
		     var dl = req.body.dl;

		var message = "Vehicle: " + Plate + "DL No " + dl + "ID No: " + nat_id + "Client Mail: " + Email + "Client Phone: " + Phone;
		console.log(message);

		var post_data = querystring.stringify({
        'username' : username,
        'to'       : to,
        'message'  : message
    });

    var post_options = {
        host   : 'api.africastalking.com',
        path   : '/version1/messaging',
        method : 'POST',

        rejectUnauthorized : false,
        requestCert        : true,
        agent              : false,

        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Content-Length': post_data.length,
            'Accept': 'application/json',
            'apikey': apikey
        }
    };
     var post_req = https.request(post_options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            var jsObject   = JSON.parse(chunk);
            var recipients = jsObject.SMSMessageData.Recipients;
            if ( recipients.length > 0 ) {
                for (var i = 0; i < recipients.length; ++i ) {
                    var logStr  = 'number=' + recipients[i].number;
                    logStr     += ';cost='   + recipients[i].cost;
                    logStr     += ';status=' + recipients[i].status; // status is either "Success" or "error message"
                    console.log(logStr);
                    }
                } else {
                    console.log('Error while sending: ' + jsObject.SMSMessageData.Message);
            }
        });
    });

    // Add post parameters to the http request
			    post_req.write(post_data);

			    post_req.end();
			   };

			  sendMessage();

	},
	available : function(req , res , next)
	{

		req.app.db.models.Car.find({ status: 'available' },
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
		var id =  mongoose.Types.ObjectId(req.params.id);
		req.app.db.models.Car.findByIdAndRemove(id,
		    function(err , docs)
			{
				if(err)
				{
					return next(err);
				}
				res.status(200).json(docs);
			});
	},

	multis : function(req, res , next)
	{
			var id = req.body.id;
			var fieldsToSet =
			{
				pricing : req.body.inputs
			};

			var options = { new: true };

			console.log(req.body.formData);

			req.app.db.models.Car.findByIdAndUpdate(mongoose.Types.ObjectId(id), fieldsToSet, options,
				function(err, docs){
					if(err)
				{
					return next(err);
				}
				res.status(200).json(docs);
			});
	},
	uploadDL: function(req, res, next)
	{
	    //var id = mongoose.Types.ObjectId(req.params.id);

		var storage = multer.diskStorage({
	  		destination: function(request , file , callback)
	  		{
	  			callback(null , './client/www/uploads');
	  		},
	  		filename: function (request, file, callback) {
		    callback(null, file.originalname);
		  }
	  	});

		var upload = multer({ //multer settings
                    storage: storage
                }).single('file');

		upload(req,res,function(err){
			if(err){
			         res.json({error_code:1,err_desc:err});
				 return;
				}

				send({ // Overriding default parameters
						  subject: 'attached '+ req.file.path,         // Override value set as default
						  files: [ req.file.path ],
						}, function (err, res) {
						  console.log('* [example 1.1] send() callback returned: err:', err, '; res:', res);
						});
		});

	},

	upload: function(req, res, next)
	{
		var id = mongoose.Types.ObjectId(req.params.id);

		var storage = multer.diskStorage({
	  		destination: function(request , file , callback)
	  		{
	  			callback(null , './client/www/uploads');
	  		},
	  		filename: function (request, file, callback) {
		    callback(null, file.originalname)
		  }
	  	});


     var upload = multer({ //multer settings
                    storage: storage
                }).single('file');

		upload(req,res,function(err){
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
            }
             res.json({error_code:0,err_desc:null});
             var pathy = req.file.path;
             console.log('one ' + pathy);

            //var fieldsToSet = { img : {data : fs.readFileSync(req.file.path, "base64"), contentType : 'img/png' } };

            cloudinary.config({
		  cloud_name: 'dxomvhu0p',
		  api_key: '811296612498678',
		  api_secret: 'j8BV1pcR-Jagxi63jCJSAMrImVM'
		});
        cloudinary.uploader.upload(pathy,
        function(result) {
         console.log('two ' + result);
         var fieldsToSet = { photo : result.secure_url };
        	var options = { new : true };
             req.app.db.models.Car.findByIdAndUpdate(id, fieldsToSet, options, function(err , docs){
				if(err)
		    	{
		    		return next(err);
		    	}
			// res.status(200).json(docs);
			});
         });
        });



	},

	sendMail: function(req, res, next)
	{
		var transporter = nodemailer.createTransport({
		    host: 'mail.kizusismartexlimited.co.ke',
		    port: 465,
		    secure: true, // secure:true for port 465, secure:false for port 587
		    auth: {
		        user: 'info@kizusismartexlimited.co.ke',
		        pass: '0716281045'
		    }
		});

		// setup email data with unicode symbols
		var mailOptions = {
		    from: req.params.email, // sender address
		    to: 'info@kizusismartexlimited.co.ke', // list of receivers
		    subject: req.params.subject, // Subject line
		    text: 'Query', // plain text body
		    html: '<p>'+ req.params.message  +'</p>' // html body
		};

		// send mail with defined transport object
		transporter.sendMail(mailOptions, (error, info) => {
		    if (error) {
		        return console.log(error);
		    }
		    console.log('Message %s sent: %s', info.messageId, info.response);
		});
	}
}
module.exports = car;
