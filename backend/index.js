import express from  "express";
import dotenv from "dotenv";
import connectDB from "./db/ConnectDB.js";

dotenv.config({})

connectDB();

const app = express();

//testing api call
/* app.get("/home", (req,res) => {
  return res.status(200).json({message:"I am coming from backend",success:true});
})
*/



const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
})