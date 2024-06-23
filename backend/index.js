import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/ConnectDB.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js"

dotenv.config({});
connectDB();
const PORT = 8080;
const app = express();

//testing api call
/* app.get("/home", (req,res) => {
  return res.status(200).json({message:"I am coming from backend",success:true});
})
*/

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
app.use("api/v1.user",userRoute)

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
