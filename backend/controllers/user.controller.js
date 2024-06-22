import { User } from "../models/user.model";

export const register = async (req, res) => {
  try {
    const [fullname, email, password] = req.body;
    if (!fullname || !email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    const user = await User.findOne({ email });
    if (user)
      return res
        .status(400)
        .json({
          message: "User already exists with this email",
          success: false,
        });

    await user.create({
      fullname,
      email,
      password,
    })

  } catch (error) {}
};
