import mongoose from "mongoose";
import User from "../model/User.js";
 import bcrypt from "bcryptjs";


export const getAllUser = async(req,res,next)=>{
    let users;
    try{
        users=await User.find();
    }catch(err){
        console.log(err);
    }
    if(!users){
        return res.status(404).json({message:"No Users Found"});
    }
    return res.status(200).json({users});
};
export const signup =async(req,res,next)=>{
    const{ name,email,password}=req.body;
    let existingUser;
    try{
        existingUser=await User.findOne({email});
    }catch(err){
        return console.log(err)
    }
    if(existingUser){
        return res.status(400).json({message:"User Alreay Exists! Login Instead"})
    }
     const hashedPassword=bcrypt.hashSync(password);
   
    const user= new User({
        name,
        email,
        password:hashedPassword,
        
    });
    try{
        await  user.save();
    }catch(err){
       return console.log(err);
    }
    return res.status(201).json({user});
};
export const login=async(req,res,next)=>{
    const{ email,password}=req.body;
    let existingUser;
    try{
        existingUser=await User.findOne({email});
    }catch(err){
        return console.log(err)
    }
    if(!existingUser){
        return res.status(404).json({message:"Couldn't find user by this email"})
    }

    const isPasswordCorrect=bcrypt.compareSync(password,existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message:"Incorrect Password"})
    }
    return res.status(200).json({message:"Login Successful",user:existingUser});
};

export const addmoney=async(req,res,next)=>{
    try {
        const { amount } = req.body;
    const UserId=req.params.id;
        // Find the user by their ID
        let user = await User.findById(UserId);
    
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        // Add the amount to the user's balance
        user.balance += amount;
    
        // Save the updated user data
        await user.save();
    
        // Send a success response
        res.status(200).json({ message: 'Balance added successfully', newBalance: user.balance });
      } catch (error) {
        console.error('Error adding balance:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    }


    
