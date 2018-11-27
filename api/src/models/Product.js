const mongoose = require('mongoose');

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

mongoose.model('Product', ProductSchema);