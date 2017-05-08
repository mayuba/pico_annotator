var Annotation = require('../models/textannotated');



module.exports = {

    get: function (req, res) {

        Annotation.find({}).populate('user', '-pwd').exec(function (err, result) {

            res.send(result);
        })
    },
    post: function (req, res) {
        console.log(req.body, req.user);
        req.body.user = req.user;

        var picoAnnotator = new Annotation(req.body);
        picoAnnotator.save();

        // picodb.collection('picoAnnotator').insertOne(req.body);

        res.status(200);



    }



}