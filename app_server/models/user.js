const mongoose=require('mongoose'); 
const userSchema=new mongoose.Schema({
    name:{
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

mongoose.model('User',userSchema)