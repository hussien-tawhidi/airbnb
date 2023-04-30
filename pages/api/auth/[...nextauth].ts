import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import prisma from "@/libs/prismadb";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentailsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentailsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentails) {
        if (!credentails?.email || !credentails?.password) {
          throw new Error("Invalid credentails");
        }
        const user = await prisma.user.findUnique({
          where: { email: credentails?.email },
        });

        if (!user || !user?.hashedPassword) {
          throw new Error("Invalid credebtials");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentails.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error("Invalid password");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },

  // this is show if we are in development
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_SECRET,
  adapter: PrismaAdapter(prisma),
};
    
export default NextAuth(authOptions);
