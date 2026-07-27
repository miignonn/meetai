import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db";
import * as schema from "@/db/schema";

console.log("=== ENV CHECK ===");
console.log("GOOGLE_CLIENT_ID:", JSON.stringify(process.env.GOOGLE_CLIENT_ID));
console.log("GOOGLE_CLIENT_SECRET:", process.env.GOOGLE_CLIENT_SECRET ? "SET" : "undefined");
console.log("GITHUB_CLIENT_ID:", JSON.stringify(process.env.GITHUB_CLIENT_ID));

export const auth = betterAuth({

    socialProviders: {
        github: { 
            clientId: process.env.GITHUB_CLIENT_ID as string, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
        }, 
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        }, 
    },

    emailAndPassword: { 
    enabled: true, 
  }, 

  database: drizzleAdapter(db, {
        provider: "pg",
        schema: {
            ...schema,
        }
    }),
});