const mongoose =require('mongoose')
const Schema = mongoose.Schema

/**
 * Creating User SChema
 */
const userSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true
    }
},{collection:'users'})

/**
 * Exporting User schema
 */
module.exports= mongoose.model('users',userSchema)