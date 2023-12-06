const mongoose = require('mongoose');

const logoModel = mongoose.Schema({
    logo1: {type: String, required: true},
    logo2: {type: String, required: true},
    logo3: {type: String, required: true},
    logo4: {type: String, required: true},
    logo5: {type: String, required: true},
});

export default mongoose.model('logos', logoModel);