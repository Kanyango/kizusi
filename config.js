//exports.port = process.env.hostname || localhost;
//exports.port = process.env.PORT || 8100;
exports.mongodb = {
	uri: 'mongodb://kibe:kizusismartex@ds157539.mlab.com:57539/kizusiapp'
	//uri: 'mongodb://kariuki:androidapps@ds033126.mlab.com:33126/smsappdb'
};

exports.secret = 'b7TY?>m6wl_i/<';



exports.oauth = {

	'facebook' :{

		'clientID'    : '166280357355680',
		'clientSecret': '06449e3dfc5b6459fd0ade360736ee35',
		'callbackURL' : 'https://kizusapp.herokuapp.com/plan/'
		//'callbackURL' : 'http://localhost:7000/oauth/facebook/callback'
	},

	'twitter' :{
		'consumerKey'    : 't3r87nEjaUpQpyayIzRwKPhOO',
		'consumerSecret' : 'OI5xaXTgkURzEKkIMbONQuYudAJTOq0mve509Vl39lW3iUFwrD',
		'callbackUrl' : 'http://localhost:7000/oauth/twitter/callback'
	},

	'cloudinary' :{
		'cloud_name'    : 'dxomvhu0p',
		'api_key'       : '811296612498678',
		'api_secret'    : 'j8BV1pcR-Jagxi63jCJSAMrImVM'
	}
};
