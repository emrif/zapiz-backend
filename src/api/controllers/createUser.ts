import { Request, Response } from "express";
import { userSchema } from "../../validation/validation";
import User from "../../model/user";

export const createUser = async (req: Request, res: Response) => {
    const parsed = userSchema.safeParse(req.body);

    if (!parsed.success) {
        res.json({ errors: parsed.error.errors });
        return
    }
    const existingUser = await User.findOne({ username: parsed.data.username });
    if (existingUser) {
        res.json({ error: "Username already exists." });
        return
    }
    const newUser = new User({
        username: parsed.data.username,
        country: parsed.data.country,
        avatar: parsed.data.avatar
    });

    await newUser.save();

    res.json({ message: "User created successfully!" });
};