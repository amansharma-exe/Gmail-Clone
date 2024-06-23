import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    //check null values if any
    if (!fullname || !email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    const user = await User.findOne({ email });
    if (user)
      return res.status(400).json({
        message: "User already exists with this email",
        success: false,
      });

    const hashedPassword = await bcrypt.hash(password, 10);

    const profilePic = `https://avatar.iran.liara.run/public`;

    await user.create({
      fullname,
      email,
      password: hashedPassword,
      profilePhoto: profilePic,
    });

    return res.status(201).json({
      message: "User account created successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
  }
};

export const login = async (req, res) => {
  try {
    const {email, password} = req.body;

    //check null values if any
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    //check if the email is present in the database
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Incorrect username or password", success: false });
    }

    //check if the password is matching return true or false
    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) {
      return res
        .status(401)
        .json({ message: "Incorrect username or password", success: false });
    }

    const tokenData = {
      userId: user._id,
    };

    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({ message: `${user.fullname} logged in successfully`, user });
  } catch (error) {
    console.log(error);
  }
};
