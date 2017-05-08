var mongoose = require('mongoose');


module.exports = mongoose.model('Annotation', {
    text: String,
    articleId: String,
    Population: Boolean,
    Intervention: Boolean,
    Comparison: Boolean,
    Outcome: Boolean,
    Background: Boolean,
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }

});