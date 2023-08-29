import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions, User, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./connect";

declare module "next-auth" {
    interface Session {
        user: User & {
            isAdmin: boolean;
        }
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        isAdmin: boolean;
    }
}


export const AuthOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    callbacks: {
        async session({ token, session }) {
            if (token) {
                session.user.isAdmin = token.isAdmin;
            }
            return session;
        },
        async jwt({ token }) {

            const userInDb = await prisma.user.findUnique({
                where: {
                    email: token.email as string
                }
            })
            token.isAdmin = userInDb?.isAdmin as boolean;
            return token;
        },
    },

}

export const getAuthSession = () => getServerSession(AuthOptions)