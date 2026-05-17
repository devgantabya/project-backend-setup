import { prisma } from "../../../lib/prisma";
import { UserRegister } from "./auth.validation";
import bcrypt from "bcrypt";

const login = (payload: string) => {
  return payload;
};

const register = async (payload: UserRegister) => {
  const hashedPassword = await bcrypt.hash(payload.password, 10);

  const user = await prisma.user.create({
    data: {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
      age: payload.age
    }
  })
  return user;
};

const changePassword = (payload: string) => {
  return payload;
};

const forgotPassword = (payload: string) => {
  return payload;
};


export const AuthService = {
  login,
  register,
  changePassword,
  forgotPassword
}