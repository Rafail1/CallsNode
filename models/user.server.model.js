const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    created_at: Date,
});
UserSchema.pre('save', function (next) {
    if(!this.created_at) {
        this.created_at = Date.now();
    }
    next();
})
mongoose.model('User', UserSchema);