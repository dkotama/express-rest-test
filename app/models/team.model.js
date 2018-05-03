const mongoose = require('mongoose')
var Schema = mongoose.Schema;

const TeamSchema = new Schema( {
    name: {
        type: String,
        required: "Please provide name for the team"
    },
    origin: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Team', TeamSchema);