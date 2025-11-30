import { connect } from "mongoose";

const mongoURI = process.env.MONGO_URI;

export const connectToDatabase = async () => {
  try {
    await connect(mongoURI, {
      retryWrites: true,
      writeConcern: "majority",
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
