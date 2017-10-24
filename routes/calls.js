
const fs = require('fs'),
    express = require('express'),
    config = require('../config/config'),
    mongoose = require('mongoose'),
    CallModel = mongoose.model('Call');


const router = express.Router();

router.get('/add', function(req, res) {
    return res.send('rrr');
});
router.post('/add', function(req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');
    let sampleFile = req.files['rec'];
    if(!sampleFile) {
        return res.status(400).send('No record name.');
    }
    const json = JSON.parse(req.body.json);
    const dir = config.RECORDS_DIR + json.client + '/';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    const audioFile = dir + sampleFile.name;
    console.log(audioFile);
    sampleFile.mv(audioFile, function(err) {
        if (err)
            return res.status(500).send(err);

        CallModel.addCall(json);
        return res.send(req.body.json.id);
    });
});
router.post('/addMissed', function(req, res) {
    CallModel.addCall(req.body);
    res.send(req.body.id);
});
module.exports = router;