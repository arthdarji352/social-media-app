import { registerUser } from "../services/auth.service.js";

//Register
export const register = async (req, res) => {
  try {
    const newUser = await registerUser(req.body, res);

    const { password, ...data } = newUser._doc;
    res.status(200).json({
      data,
      message: "User has been registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      message: "Error Occurred Registering User",
    });
    console.log(error);
  }
};
