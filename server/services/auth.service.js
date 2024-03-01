import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";

export const registerUser = async (body, res) => {
  const { username, email, password } = body;

  if (!username || !email || !password) {
    return res.status(400).send("Please provile details");
  }
  const hashedPassword = bcrypt.hashSync(body.password, 10);

  const newUser = new UserModel({
    username: username,
    email: email,
    password: hashedPassword,
  });

  await newUser.save();

  return newUser;
};
