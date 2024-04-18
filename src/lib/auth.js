import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

import { handleDBConnection } from './db/conn';
import { User } from './models/users';
import { authConfig } from './auth.config';

async function handleCheckLoginCredentials(credentials) {
  handleDBConnection();

  const existingUser = await User.findOne({ username: credentials.username });

  if (!existingUser) {
    throw new Error('Invalid username');
  }

  const validPassword = await bcrypt.compare(
    credentials.password,
    existingUser.password
  );

  if (!validPassword) {
    throw new Error('Invalid password');
  }

  return existingUser;
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await handleCheckLoginCredentials(credentials);
          return user;
        } catch (_) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // console.log(user, account, profile);
      if (account.provider === 'github') {
        handleDBConnection();

        try {
          const user = await User.findOne({ email: profile.email });

          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });

            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});
