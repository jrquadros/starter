const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

//definino Schema do Product

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: false,
    },

    description:{
        type: String,
        required: false,
    },

    url:{
        type: String,
        required: false,
    },
    createdAt:{

        type: Date,
        default: Date.now,
    },
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);