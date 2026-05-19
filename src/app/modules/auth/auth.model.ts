import mongoose, { model } from "mongoose";

interface IUser {
  name: string;
  email: string;
  password: string;
  age?: number;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUser>(
    {
        name:
        {
            type: String,
            required: true,
            trim: true,
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
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

export const User = model<IUser>("User", userSchema);