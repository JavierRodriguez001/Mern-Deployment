const mongoose = require('mongoose')

const StoreSchema = new mongoose.Schema({
    store: {
        type:String,
        required:[ true,"Store is required"],
        minLength: [3, "Must be more than 3 characters"]
    },
    storeNumber: {
        type:Number,
        required:[ true,"Store number is required"],
        min: [1, "Must be greater than 0"]
    },
    isOpen :{
        type:Boolean,
        default: false
    }
}, {timestamps : true})

const Store = mongoose.model('Store', StoreSchema)
module.exports = Store
