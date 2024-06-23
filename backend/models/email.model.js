import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
  to:{
    type:String,
    required:true
  },
  subject:{
    type:String,
    required:true
  },
  nessage:{
    type:String,
    required:true
  },

},{timestamps:true});

export const Email = mongoose.model("Email",emailSchema);

