import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../prisma/client";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      //   Authorizes User in Login
      async authorize(credentials: any) {
        if (!credentials.email || !credentials.password) {
          throw new Error("Missing Email or Password");
        }
        try {
          const user = await prisma.user.findFirst({
            where: {
              email: credentials.email,
            },
          });
          if (!user) {
            throw new Error("No user found");
          }

          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isValid) {
            throw new Error("Invalid Password");
          }

          //   await prisma.user.create({
          //     data: {
          //       email: credentials.email,
          //       password:credentials.password
          //     },
          //   });

          return {
            id: user.id.toString(),
            email: user.email,
            isAdmin: user.isAdmin,
            name:user?.name
          };
        } catch (error) {
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  pages:{
    signIn:"/login",
    error:"/login"
  },
  session: {
    strategy: "jwt",
    maxAge:30*24*60*60
  },
  secret:process.env.NEXTAUTH_SECRET
};
