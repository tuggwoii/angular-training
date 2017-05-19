'use strict';
var express = require('express');
var angularAssets = require('./server/moddlewares/angular-assets-response.js');
var app = express();
global.appRoot = __dirname;
app.set('port', (process.env.PORT || 8000));
app.set('views', __dirname + '/dist/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use('/libs', express.static(__dirname + '/node_modules'));
app.use('/css', express.static(__dirname + '/src/css'));
app.use('/js', express.static(__dirname + '/src/js'));
app.use('/img', express.static(__dirname + '/src/img'));
app.use('/files', express.static(__dirname + '/files'));
app.use('/favicon.ico', express.static(__dirname + '/src/static/img/favicon.ico'));
app.use('/fonts', express.static(__dirname + '/src/static/fonts'));
app.use('*', angularAssets);

app.use('*', function (req, res, next) {
    res.status(200).render('index.html');
});

app.listen(app.get('port'), function () {
    console.log('App is running on port ' + app.get('port'));
});