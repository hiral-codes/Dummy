import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.model("User",userSchema)