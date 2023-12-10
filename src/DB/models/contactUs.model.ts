const mongoose = require('mongoose');

const contactUsModel = mongoose.Schema({
    f_name: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true},
    county: {type: String, required: true},
});

export default mongoose.model('contact_us', contactUsModel);