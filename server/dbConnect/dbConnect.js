import mongoose from "mongoose";

export const dbConnect = () => {
  try {
    mongoose.connect(process.env.DB_URL);
    console.log("DB has been connected Successfully ");
  } catch (error) {
    console.log(error);
  }
};
