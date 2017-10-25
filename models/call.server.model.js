mongoose = require('mongoose');
const CallSchema = mongoose.Schema({
    id: {type: String, unique:true},
    audiofile: String,
    dateEnd: Date,
    dateStart: Date,
    isIn: Number,
    isMissed: Number,
    number: String,
});
CallSchema.statics.addCall = function (jsonCall) {
    const call = new this(jsonCall);
    call.save(function (err, res) {
        console.log(err, res);
    });
};

module.exports = mongoose.model('Call', CallSchema);