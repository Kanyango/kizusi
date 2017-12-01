

var fs = require('fs');
var readline = require('readline');
var google = require('googleapis');
//var googleAuth = require('google-auth-library');
var OAuth2 = google.auth.OAuth2;

// If modifying these scopes, delete your previously saved credentials
// at ~/.credentials/gmail-nodejs-quickstart.json
var scopes = ['https://www.googleapis.com/auth/gmail.send'];

var oauth2Client = new OAuth2(
          "324793517486-3koaibnp8dph5tugol3qaf1b8e7od11k.apps.googleusercontent.com",
          "qaQqrc8zTfKbUmXbHdnu0CL4",
          "urn:ietf:wg:oauth:2.0:oob"
          );
var url = oauth2Client.generateAuthUrl({
          access_type: 'online',
          scope: scopes
     })
