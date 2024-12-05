import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    ("mongoDB connected.");
  } catch (error) {
    error;
  }
};
export default connectDB;
