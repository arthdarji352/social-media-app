import { LoginUser, registerUser } from "../services/auth.service.js";

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

//login

export const login = async (req, res) => {
  try {
    const user = await LoginUser(req.body, res);

    const { password, ...data } = user._doc;
    res.status(200).json({
      data,
      message: "User Login successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      message: "Error Occurred Login User",
    });
    console.log(error);
  }
};
