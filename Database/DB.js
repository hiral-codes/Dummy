import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://j2patel4545:32193219j@cluster0.oe8uz52.mongodb.net/Testing2"
    );
    console.log("mongoDB Connected");
  } catch (error) {
    console.log("Error Connecting MongoDB:", error);
  }
};
