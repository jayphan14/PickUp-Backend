import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";
// LOCAL LOGIN
const registerWithEmail = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    // If email already exists, return Error
    const existingUser = await User.findOne({
      where: { email: email },
    });

    if (existingUser) return res.status(500).json("User already exists");

    // Hash the password and save the user in the database:
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      firstName,
      lastName,
      email: email,
      password: hashPassword,
    });
    return res.status(201).json(newUser);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};

// LOCAL LOGIN
const loginWithEmail = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    // If email doesnt exists, return Error
    const existingUser = await User.findOne({
      where: { email: email },
    });

    if (!existingUser) {
      return res.status(404).json("User doesnt exists");
    }
    // compare
    const isCorrectPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isCorrectPassword) {
      return res.status(500).json("Invalid Password");
    }
    const token = jwt.sign({ id: existingUser.id }, process.env.JWT_SECRET_KEY);
    const userWithoutPassword = existingUser.get();
    delete userWithoutPassword.password;
    return res.status(200).json({ token , user: userWithoutPassword});

  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
};

//

const googleRegister = (req: object, res: object): number => 5;

export { registerWithEmail, loginWithEmail, googleRegister };
