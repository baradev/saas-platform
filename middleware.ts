import { clerkMiddleware } from '@clerk/nextjs/server'

// Apply Clerk middleware to protected routes
export default clerkMiddleware()

export const config = {
  matcher: [
    '/((?!.*\\..*|_next|api/webhooks/clerk|api/webhooks/stripe|$).*)', // Exclude static files, _next, and the specified webhook routes
    '/(api|trpc)(.*)',
  ],
}
