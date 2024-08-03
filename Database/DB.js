import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/new"
    );
    console.log("mongoDB Connected");
  } catch (error) {
    console.log("Error Connecting MongoDB:", error);
  }
};
