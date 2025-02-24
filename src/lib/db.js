import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

// let cached = global.mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
  // if (cached.conn) return cached.conn;

  // if (!cached.promise) {
  //   cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  // }

  // cached.conn = await cached.promise;
  // return cached.conn;
}
