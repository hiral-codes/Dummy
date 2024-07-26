import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import userRoutes from './Routes/userRoutes.js'
import { connectDB } from "./Database/DB.js";
const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World...")
})
connectDB();
// Routes
app.use("/user", userRoutes)

app.listen(PORT, () => {
  console.log(`Server is Running at http://localhost:${PORT}`);
});
