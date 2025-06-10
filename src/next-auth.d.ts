import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string | null;
      phone?: number | null;
      isAdmin?: boolean;
    } & DefaultSession["user"];
  }
  interface User {
      id: string;
      email: string;
      name?: string | null;
      phone?: number | null;
    isAdmin: boolean;
  }

  interface JWT {
    id: string;
    email: string;
    phone?: number | null;
    isAdmin?: boolean;
    name?: string | null;
  }
}
