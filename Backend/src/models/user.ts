// Code written by Lucas Mouette

import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser {
    _id: string;
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema<IUser>({

    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
        this.password = await bcrypt.hash(this.get("password"), 10);
        next();
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;