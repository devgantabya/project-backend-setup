// import { prisma } from "../../../lib/prisma";
// import crypto from "crypto";
// import { UserLogin, UserRegister } from "./auth.validation";
// import bcrypt from "bcryptjs";
// import { sendEmail } from "../../../utils/mailer";
// import { _email } from "zod/v4/core";
import { User } from "./auth.model";


// Using Prisma
// const register = async (payload: UserRegister) => {
//   const hashedPassword = await bcrypt.hash(payload.password, 10);
//   const verifyToken = crypto.randomBytes(32).toString("hex");

//   const user = await prisma.user.create({
//     data: {
//       name: payload.name,
//       email: payload.email,
//       password: hashedPassword,
//       age: payload.age,
//       verifyToken: verifyToken,
//       isVerified: false,
//     }
//   })

//   const verifyLink = `http://localhost:5000/api/auth/verify-email?token=${verifyToken}&email=${user.email}`;

//   await sendEmail(
//     user.email,
//     "Verify your email",
//     `<h2>Click to verify</h2><a href="${verifyLink}">Verify Email</a>`
//   );

//   return {
//     message: "Registration successful. Please verify your email.",
//   };
// };


// const login = async (payload: UserLogin) => {
//   const user = await prisma.user.findUnique({
//     where: {
//       email: payload.email
//     }
//   });

//   if (!user) {
//     throw new Error("User not found");
//   }

//   const isPasswordMatch = await bcrypt.compare(payload.password, user.password);

//   if (!isPasswordMatch) {
//     throw new Error("Invalid password");
//   }

//   return user;
// };

// const verifyEmail = async (token: string, email: string) => {
//   const user = await prisma.user.findUnique({
//     where: {
//       email
//     }
//   });

//   if (!user) {
//     throw new Error("User not found");
//   }

//   if (user.verifyToken !== token) {
//     throw new Error("Invalid token");
//   }

//   await prisma.user.update({
//     where: {
//       email
//     },
//     data: {
//       isVerified: true,
//       verifyToken: null
//     }
//   });

//   return {
//     message: "Email verified successfully"
//   };
// };


// Using Mongoose
const register = async (payload: any) => {
  const {name, email, password, age, isAdmin} = payload;

  const user = await User.create({
    name,
    email,
    password,
    age,
    isAdmin,
  })
  return user;
}

const login = async (payload: any) => {
  const { email, password } = payload;
  const user = await User.findOne({ email } as any);

  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

const users = async () => {
  const allUsers = await User.find();
  return allUsers;
}

const user = async (id: string) => {
  const singleUser = await User.findById(id);
  if (!singleUser) {
    throw new Error("User not found")
  }
  return singleUser;
}

export const AuthService = {
  login,
  register,
  users,
  user,
}