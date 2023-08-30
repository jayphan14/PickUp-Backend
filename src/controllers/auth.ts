import express, { Request, Response } from 'express';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from '../models/User';

const localRegister = async (req: Request, res: Response) => {

    try {
        const { email, password } = req.body;
        // If email already exists, return Error
        // const existingUser = await pool.query('SELECT user FROM users WHERE email = $1', [email])
        // if (existingUser.rows.length > 0) res.status(500).json('User already exists');
        
        // hash the password and save the user in the database:
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt)
        const users = await User.findAll();
        console.log(users);
        const newUser = await User.create({
            firstName: 'jay',
            lastName: 'phan',
            email: email,
            password: hashPassword,
        })
        res.status(201).json(newUser);
    } catch (e) {
        console.error(e);
        res.status(500).json({error: e.message});
    }
    

}

const googleRegister = (req: object, res: object): number => 5;

export { localRegister, googleRegister };