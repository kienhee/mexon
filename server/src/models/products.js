const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    category_id: { type: String, required: true },
    name: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: [] },
    sale: { type: Number, default: 1, required: true },
    price: { type: Number, required: true }
}, { timestamps: true });

const products = mongoose.model('products', ProductSchema);

module.exports = products;