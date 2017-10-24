mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/myapp', {
    useMongoClient: true
});

require('../models/call.server.model');
require('../models/user.server.model');