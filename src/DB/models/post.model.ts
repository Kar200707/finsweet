const mongoose = require('mongoose');

const postModel = mongoose.Schema({
    user_id: {type: String, required: true},
    category: {type: String, required: true},
    category_icon: {type: String, required: true},
    created_date: {type: String, required: true},
    title: {type: String, required: true},
    image: {type: String, required: true},
    shortDescription: {type: String, required: true},
    description: {type: String, required: true},
});

export default mongoose.model('posts', postModel);