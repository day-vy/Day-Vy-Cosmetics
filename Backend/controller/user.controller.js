import User from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

// UPDATE USER
const updateUser = asyncHandler(async (req, res) =>{
    if(req.body.passwoed){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.push(req.body.password, salt);
    }

    const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {$set: req.body},
        {new: true}
    );

    if(!updateUser){
        res.status(404);
        throw new Error("User was not updated");
    } else {
        res.status(200).json(updateUser);
    }
});

// DELETE USER
const deleteUser = asyncHandler(async (req,res) =>{
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    if(!deleteUser){
        res.status(400);
        throw new Error("User was not deleted successfully");
    }else{
        re.status(201).json("User was deleted successfully");
    }
});

// GET ONE USER
const getUser = asyncHandler(async (req,res) =>{
    const user = await User.findBy(req.params.id);
    if(!user){
        res.status(400);
        throw new Error("User was not found");
    } else {
        res.status(200).json(user);
    }
});

// GET ALL USERS
const getAllUsers = asyncHandler(async (req,res) =>{
    const users =await User.find();
    if(!users){
        res.status(400);
        throw new Error("Users were not fetched.");
    }else{
        res.status(200).json(users);
    }
});

export {getAllUsers, getUser, deleteUser,updateUser};