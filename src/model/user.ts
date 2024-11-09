import { model, Schema, Document } from "mongoose";

interface IUser extends Document {
    username: string;
    avatar: string;
    country: string;
}

const userSchema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    avatar: {
        type: String,
        required: false,
        default: "https://i.postimg.cc/pdgrPcN5/4376646-512.png" // Default avatar 
    },
    country: { type: String, required: false, default: "unknown" }
});

const User = model<IUser>("Game", userSchema);

export default User;
