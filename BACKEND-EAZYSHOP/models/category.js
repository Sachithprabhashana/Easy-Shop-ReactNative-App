const mongoose = require('mongoose');
const router = require('../routers/categories');

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    icon: {
        type: String,
    
    },

    color: {
        type: String,
    },

})

CategorySchema.method('toJSON', function(){
    const { __v, ...object } = this.toObject();
    const { _id:id, ...result } = object;
    return { ...result, id };
});


exports.Category = mongoose.model('Category', CategorySchema);