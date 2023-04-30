import prisma from "@/libs/prismadb";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method !== "POST") {
    return response.status(405).json({ message: "Method not allowed" });
  }
  //   const body = await request.json();

  const salt = 10;
  const { name, email, password } = request?.body;
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword
    },
  });
  return response.status(201).json(user);
}
