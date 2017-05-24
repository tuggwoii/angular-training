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
app.use('/favicon.ico', express.static(__dirname + '/dist/favicon.ico'));
app.use('/fonts', express.static(__dirname + '/src/static/fonts'));
app.use('*', angularAssets);
app.get('/api/data', function (req, res, next) { res.json({ data: { id: 1, name: 'Tak' }, errors: [], meta: {} });});
app.use('*', function(req, res, next) {
    var date = new Date();
    console.log('Hit server on: ' +  date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
    res.status(200).render('index.html', function(err, html) {
        if (err) {
            res.status(200).send('<html><head></head><body><p>Compiling..., please wait 5 sec</p><script>setTimeout(function(){ window.location.reload();}, 5000)</script></body></html>');
        }
        else {
            res.status(200).send(html);
        }
    })
});
app.listen(app.get('port'), function () {
    console.log('App is running on port ' + app.get('port'));
});