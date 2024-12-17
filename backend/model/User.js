import mongoose from 'mongoose';

const Schema=mongoose.Schema;

const userSchema=new Schema({
    name:{
        type:String,
        required:true},
    
    email: {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    upi:{
        type:String,
        // required:true
       },
    riskfactor:{
        type:Number,
        // required:true
    },
    upipin:{
        type:Number,
        // required:true
    },
    balance:{
        type:Number,
        required:true,
        default:0
    }
    }
);
export default mongoose.model("User",userSchema);

