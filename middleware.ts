import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['!/', '!/api/webhooks/clerk'])

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect()
})

export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', // All routes except static files and _next
    '/', // The root route
    '/(api|trpc)(.*)', // API and TRPC routes
  ],
}
