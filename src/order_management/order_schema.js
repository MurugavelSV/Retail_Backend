import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderId: String,
    orderDetails:{
        modelName: String,
        productId: Number,
        color: String,
        quantity: Number,
        cocoon: String,
        reeler: String,
        zari: String,
        weavenType: String,
        manufacturer: String
    }
});

const Orders = mongoose.model("Orders", orderSchema);