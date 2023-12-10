const mongoose = require('mongoose');

const privacyPolicyModel = mongoose.Schema({
    last_update: {type: String, required: true},
    texts: [{ title: String, text: String }, { title: String, text1: String, text2: String }],
});

export default mongoose.model('privacy_policy', privacyPolicyModel);