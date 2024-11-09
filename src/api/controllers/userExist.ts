import { Request, Response } from "express";
import User from "../../model/user";

export const userExist = async (req: Request, res: Response) => {
    const { username } = req.body
    if (typeof username !== "string" || !username.trim()) {
        res.json({ error: "send a valid username" });
    }
    const existingUser = await User.findOne({ username });

    res.send(existingUser ? true : false)
};