// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    key: {
        type: Number,
        required: true
    },
    finished: {
        type: Boolean,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Contact = module.exports = mongoose.model('Todo', contactSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}