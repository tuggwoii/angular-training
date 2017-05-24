var fs = require('fs');
var angularAssets = [
    '/inline.bundle.js',
    '/inline.bundle.js.map',
    '/polyfills.bundle.js',
    '/polyfills.bundle.js.map',
    '/styles.bundle.js',
    '/styles.bundle.js.map',
    '/vendor.bundle.js',
    '/vendor.bundle.js.map',
    '/main.bundle.js',
    '/main.bundle.js.map',
    '/0.chunk.js',
    '/0.chunk.js.map'
];
module.exports = function (req, res, next) {
    if (angularAssets.indexOf(req.baseUrl) > -1) {
        res.send(fs.readFileSync('dist/' + req.baseUrl, 'utf8'));
    }
    else {
        next();
    }
}