const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/user/signup', { target: 'http://localhost:5000/user/signup' }));
    app.use(proxy('/user/signin', { target: 'http://localhost:5000/user/signin' }));
}