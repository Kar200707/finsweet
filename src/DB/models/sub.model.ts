const mongoose = require('mongoose');

const subscribeModel = mongoose.Schema({
    email: {type: String, required: true}
});

export default mongoose.model('subscribe', subscribeModel);