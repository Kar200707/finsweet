const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    title: {type: String, required: true},
    email: {type: String, required: true},
    bio: {type: String, required: true},
    facebook: {type: String, required: true},
    instagram: {type: String, required: true},
    twitter: {type: String, required: true},
    linkedin: {type: String, required: true},
    superAdmin: {type: String, required: true},
    password: {type: String, required: true},
});

export default mongoose.model('users', userModel);