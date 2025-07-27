import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const connect = async () => {
  try {
    console.log("Attempting to connect to database.....");
    console.log("MONGO_URI:", process.env.MONGO_URI); // Debug
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("Connected to database.....");
  } catch (error) {
    console.log("Failed to connect to database.....", error.message);
    process.exit(1);
  }
};

export default connect;
