const mongoose = require('mongoose');

const CategoryModel = mongoose.Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    shortDescription: {type: String, required: true},
});

export default mongoose.model('categories', CategoryModel);