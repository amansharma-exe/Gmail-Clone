import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
  fullname:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },

},{timestamps});

export const Email = mongoose.model("Email",emailSchema);

