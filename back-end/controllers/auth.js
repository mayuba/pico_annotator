(function(){

'use strict';

var User = require('../models/users');
var jwt = require('jwt-simple');
var moment = require('moment');


// module réutilisé source: Lynda.com
module.exports = {

    register: function (req, res) {
        console.log(req.body);

        User.findOne({
            email: req.body.email
        }, function (err, existingUser) {

            if (existingUser) {
                return res.status(409).send({
                    message: "L'adresse courriel existe déjà"
                });


            } else {

                var user = new User(req.body);
                user.save(function (err, result) {
                    if (err) {
                        res.status(500).send({
                            message: err.message

                        });

                    }

                    res.status(200).send({
                        token: createToken(result)
                    });

                });



            }


        });
    },

    login: function (req, res) {
        User.findOne({
            email: req.body.email
        }, function (err, user) {

            if (!user) {
                return res.status(401).send({
                    message: 'Email ou mot de passe invalide'
                });

            } else if (req.body.pwd === user.pwd) {
                console.log(req.body, user.pwd);
                res.send({
                    token: createToken(user)
                });
            } else {
                return res.status(401).send({
                    message: 'Email invalide et/ou mot de passe invalide'
                });
            }
        });
    }


};



function createToken(user) {
    var payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix()

    };
    // mettre secret dans un fichier de configuration
    return jwt.encode(payload, 'secretsecret');

}





})();