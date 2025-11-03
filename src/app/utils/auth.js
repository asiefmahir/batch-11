import CredentialsProvider from "next-auth/providers/credentials";

import User from "@/app/models/user";
import bcrypt from "bcrypt";
import connectDb from "./db";
// backend token generate -> jwt
// frontend -> localStorage/cookie (jwt)
// request -> jwt

export const authOptions = {
	session: {
		strategy: "jwt",
	},
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				console.log("I am being called");

				if (!credentials.email || !credentials.password) {
					throw new Error("Email and PassWord are required");
				}
				try {
					await connectDb();
					const user = await User.findOne({
						email: credentials.email,
					}).lean();

					if (!user) {
						throw new Error("Invalid Email");
					}

					const isMatch = await bcrypt.compare(
						credentials.password,
						user.password,
					);
					if (!isMatch) {
						throw new Error("Invalid Password");
					}

					const { password, ...userWithOutPassword } = user;
					return userWithOutPassword;
				} catch (error) {
					throw new Error("Authentication Unsuccessful");
				}
			},
		}),
	],
	callbacks: {
		async signIn({ user }) {
			console.log(user, "user");
			return !!user;
		},
		async jwt({ token, user }) {
			console.log(user, "user");
			if (user) {
				token.user = {
					id: user._id,
					email: user.email,
					name: user.name,
					role: user.role,
				};
			}
			return token;
		},

		async session({ session, token }) {
			if (token.user) {
				session.user = token.user;
			}
			return session;
		},
	},
	secret: "supersecretsecret",
	pages: {
		signIn: "/login",
	},
};
