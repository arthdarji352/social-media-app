import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  const { username, email, password } = req;

  if (!username || !email || !password) {
    return res.status(400).json("Please provile details");
  }
  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = new UserModel({
    username: username,
    email: email,
    password: hashedPassword,
  });

  await newUser.save();

  return newUser;
};

export const LoginUser = async (req, res) => {
  const { email, password } = req;

  if (!email || !password) {
    return res.status(400).json("Please provile details");
  }

  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(404).send("User not found");
  }

  const passwordCheck = await bcrypt.compare(password, user.password);
  if (!passwordCheck) {
    return res.status(400).json("wrong password");
  }
  return user;
};
