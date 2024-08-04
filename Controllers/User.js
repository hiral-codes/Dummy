import User from "../Models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  try {
    const { username, password, firstName, lastName, mobileNo } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); //For hashing The Password
    const user = new User({
      username,
      password: hashedPassword,
      firstName,
      lastName,
      mobileNo
    });
    const SavedUser = await user.save();
    res.status(200).json(SavedUser);
  } catch (error) {
    res.status(400).json(error);
  }
};


export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = User.findById(id);
    const deletedUser = await user.deleteOne();
    res.status(201).json(deletedUser);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const getUser = async (req, res) => {
  try {
    const user = User.find();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Login
export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password); //hashed password ko compare krne ke liye
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const payload = { userId: user._id };
    const token = jwt.sign(payload, "security_key_daal_dena", {
      expiresIn: "7d",
    }); //Yha Pe Security Key Daal Dena kuch bhi

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    }); // 7 days
    res.json(user); //response me user ka data bhi jayega usko access krke context me daal dene ka
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Updating Profile

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, firstName, lastName, mobileNo } = req.body; //more fields as needed

  try {
    const user = await User.findById(id);
    if (!user) {
      throw new Error('User not found');
    }

    if (username) {
      user.username = username;
    }
    if (firstName) {
      user.firstName = firstName;
    }
    if (lastName) {
      user.lastName = lastName;
    }
    if (mobileNo) {
      user.mobileNo = mobileNo;
    }

    const savedUser = await user.save();
    res.status(200).json({ user: savedUser, message: "User Updated successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error updating user", error: error.message });
  }
};

