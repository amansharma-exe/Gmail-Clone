import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/ConnectDB.js";
import cookieParser from "cookie-parser";
import test from "./routes/user.route.js";
import cors from "cors";

//const test = require('./routes/user.route.js');

dotenv.config({});
connectDB();
const PORT = 8080;
const app = express();


//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser);

const corsOptions = {
  origin:'http://localhost:3000/',
  credentials:true
}
app.use(cors(corsOptions)); 

// routes
//app.use("api/user",userRoute);
app.use("api/user",test);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
