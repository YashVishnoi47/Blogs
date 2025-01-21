import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware(
  // {
  //   publicRoutes: ["/", "/api/webhook/clerk"],
  // },
  async (auth, req) => {
    const { userId } = await auth();
    if (!userId && isProtectedRoute(req)) {
      return auth().redirectToSignIn(); 
    }
  }
);

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
