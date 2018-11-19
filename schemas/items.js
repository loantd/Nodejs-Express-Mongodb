const mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
    name: 'string',
    status: 'string',
    ordering: 'string'
});
module.exports = mongoose.model('Item',itemSchema);