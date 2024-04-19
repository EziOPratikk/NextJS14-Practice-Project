export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [],
  // callbacks is an object containing functions that will be called during the authentication process
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnAdminPage = request.nextUrl?.pathname.startsWith('/admin');
      const isOnBlogPage = request.nextUrl?.pathname.startsWith('/blog');
      const isOnCreateBlogPage =
        request.nextUrl?.pathname.startsWith('/create-blog');
      const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login');

      // Only admin can see admin page
      if (isOnAdminPage && !user?.isAdmin) {
        return false;
      }

      // Only authenticated can see blog page
      if ((isOnBlogPage || isOnCreateBlogPage) && !user) {
        return false;
      }

      // Only not authenticated can see login page
      if (isOnLoginPage && user) {
        return Response.redirect(new URL('/', request.nextUrl));
      }

      return true;
    },
  },
};
