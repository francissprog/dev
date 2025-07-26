import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const JWT_TOKEN = process.env.JWT_SECRET || "qC06932YWk0T";


export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Form validation
        if (!email || !password) return res.status(400).json({ error: "Complete all fields" });

        // Find the user
        const findUser = await User.findOne({ email });
        if (!findUser) return res.status(404).json({ error: "User not found" });

        // Compare passwords
        const authPassword = await bcrypt.compare(password, findUser.password);
        if (!authPassword) return res.status(401).json({ error: "Invalid email or password" });

        // Create a token
        const token = jwt.sign({
            id: findUser._id,
            username: findUser.username,
            email: findUser.email
        }, JWT_TOKEN, { expiresIn: '1h' });

        // create a user credentials
        const userCredentials = {
            id: findUser._id,
            username: findUser.username,
            email: email
        }

        // Return a success response
        return res.status(200).json({ token, message: `Welcome Back! ${findUser.username}`, userCredentials });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};


export const registerController = async(req, res) => {
    const {username, email, password} = req.body;

    try {
        if (!username || !email ||!password) 
            return res.status(400).json({error: "Complete all Fields"});

        const existingUser = await User.findOne({email}).lean();

        if (existingUser) 
            return res.status(403).json({error: "User already Existed"});

        // generate salt password
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);

        // hash the password using salt
        const hashPass = await bcrypt.hash(password, salt);

        // create new user
        const newUser = new User({
            username,
            email,
            password: hashPass
        })

        // save the new user
        await newUser.save();

        // generete token
        const token = jwt.sign({
            id: newUser._id,
            username: newUser.username
        },JWT_TOKEN, {expiresIn: "1hr"})

        
          // create a user credentials
          const userCredentials = {
            id: newUser._id,
            username: newUser.username,
            email: email
        }
        // throw a response code
        return res.status(200).json({token, message: `Welcome to Listify! ${newUser.username}`,userCredentials});

    } catch (error) {
        // log the error? 
        console.log(error);
    }

}