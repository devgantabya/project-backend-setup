import mongoose from "mongoose";

interface IUser {
  name: string;
  email: string;
  password: string;
  age?: number;
  isAdmin?: boolean;
}

const userSchema = new mongoose.Schema<IUser>(
    {
        name:
        {
            type: String,
            required: true,
        },

        email:
        {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        password:
        {
            type: String,
            required: true,
        },

        age:
        {
            type: Number,
        },

        isAdmin:
        {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);