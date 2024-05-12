import User from '../models/User.js';
import bcrypt from 'bcryptjs';
export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  }
  catch (err) {
    return console.log(err);
  }

  if (!users) {
    return res.status(500).json({ message: "No users found" })
  }

  return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name && name.trim() === "" || !email || email.trim() === "" && !password || password.trim() === "") {
    return res.status(422).json({ message: "Invalid inputs" });
  }
  const hashedPassword = bcrypt.hashSync(password);
  let user;
  try {
    user = new User({
      name,
      email,
      password: hashedPassword
    });
    user = await user.save();
  } catch (err) {
    return console.log(err);
  }

  if (!user) {
    return res.status(500).json({ message: "Failed to add user" });
  }

  return res.status(201).json({ user });
}

export const updateUser = async (req, res, next) => {
  const id = req.params.id;

  const { name, email, password } = req.body;
  if (!name && name.trim() === "" || !email || email.trim() === "" || !password || password.trim() === "") {
    return res.status(422).json({ message: "Invalid inputs" });
  }
  const hashedPassword = bcrypt.hashSync(password);
  let user;
  try {
    user = await User.findByIdAndUpdate(id, { name, email, password: hashedPassword });
  } catch (error) {
    return console.log(error);
  }
  if (!user) {
    return res.status(500).json({ message: "Something went wrong" });
  }
  res.status(200).json({ message: "User updated successfully" });
}

export const deleteUser = async (req, res, next) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findByIdAndRemove(id);
  } catch (err) {
    return console.log(err);
  }

  if (!user) {
    return res.status(500).json({ message: "Something went wrong" });
  }
  return res.status(200).json({ message: "User deleted successfully" });
}