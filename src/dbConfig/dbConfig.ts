import mongoose from 'mongoose';

const uri = process.env.MONGO_URI || "undefined";
if (!uri) {
  throw new Error("TOKEN_SECRET environment variable is not set");
}

export async function connect() {
  if (mongoose.connection.readyState === 0) { // Check if already connected
    try {
      await mongoose.connect(uri, {
        serverSelectionTimeoutMS: 30000, // 30 seconds
        socketTimeoutMS: 30000 // 30 seconds
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB", error);
      throw error; // Rethrow the error after logging it
    }
  } else {
    console.log("Already connected to MongoDB");
  }
}
