'use strict';

var mongoose = require('mongoose');
var config = require('./config');
var jwt = require('express-jwt');
var auth  = jwt({ secret : config.secret , userProperty: 'payload'});
var passport = require('./passport');
var user    = require('./server/service/users');
var car    = require('./server/service/car');
var rent_out    = require('./server/service/rent_out');
var reserve   = require('./server/service/reserve');


module.exports = function(app , passport)
{   
    app.post('/notifications', rent_out.not_create);
    app.get('/notifications', rent_out.not_read);
    app.put('/notifications/:id', rent_out.not_put);
    app.post('/rent_out' ,  rent_out.create);
    app.get('/rent_out',  rent_out.read);
    //car routes
    app.post('/car' ,  car.create);
    app.get('/car',  car.read);
    app.get('/car/:id', car.single_car);
    app.put('/car/:id', car.update);
    app.delete('/car:id',  car.remove);
    app.get('/reserved',  car.reserved);
    app.get('/available',  car.available);
    app.put('/pricing',  car.multis);

    app.post('/mails', car.sendMail);
    //res route
    app.post('/uploadDL', car.uploadDL)
    app.post('/ressms',  car.clres);

    //upload image
    app.post('/upload:id',  car.upload);

    //reserve routes
    app.post('/reserve/',  reserve.create);
    app.get('/reserve',reserve.read);
    app.put('/reserve',  reserve.update);
    app.delete('/reserve:id' , reserve.remove);
    app.put('/return', reserve.returnd);

    app.post('/session/create' , user.create);
    app.post('/login' , user.login);
    app.put('/login' , user.update);

    app.get('/logout' , function(req , res){
        	req.logout();
        	res.redirect('/');
        });
    	//app.all('/*', function(req, res) {res.send('process ' + process.pid + ' says hello!').end();})

};
