// Code adapté source: lynda.com

var jwt = require('jwt-simple');
var moment = require('moment');

module.exports = function checkAuthenticated(req, res, next) {
    if(!req.header('Authorization')) {
        return res.status(401).send({message: 'Assurez-vous que votre demande comporte un en-tête valide'});
    }
    
    var token = req.header('Authorization').split(' ')[1];
    
    var payload = jwt.decode(token, 'secretsecret');
    
    if(payload.exp <= moment().unix()){
        return res.status(401).send({message: 'Token has expired'});
    }
    
    req.user = payload.sub;
    
    next();
}