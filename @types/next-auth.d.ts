import { Role } from "@/interface/global";
import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {

    interface User extends DefaultUser {
        username: string;
    }

    interface IUser extends DefaultUser {
        user?: User;
    }

    interface Session {
        user?: User & DefaultSession["user"];
    }
}

declare module "next-auth/jwt" {
    interface JWT extends IUser { }
}