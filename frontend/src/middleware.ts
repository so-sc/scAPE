import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // Extract cookies from the request
  const cookieHeader = req.headers.get('cookie') || '';

  // Log cookies for debugging
  console.log('Middleware cookies:', cookieHeader);

  // Fetch the check-auth endpoint, passing the cookies explicitly
  const res = await fetch('https://devhostapi.sosc.org.in/check-auth', {
    headers: {
      cookie: cookieHeader,  // Pass cookies to the backend
    },
    credentials: 'include', // Ensure credentials are included
  });

  const userData = await res.json();
  console.log('Auth Response:', userData);

  // Handle authentication status
  if (res.status === 401) {
    // Redirect to Google authentication if not authenticated
    return NextResponse.redirect(new URL('https://devhostapi.sosc.org.in/auth/google/', req.url));
  } else {
    // If authenticated and trying to access /register but the user has college data, redirect to /events
    if (userData.user?.college && req.nextUrl.pathname === '/register') {
      return NextResponse.redirect(new URL('/events', req.url));
    }
  }

  // Allow request to proceed if authenticated
  return NextResponse.next();
}

export const config = {
  matcher: ['/events','/edit', '/register'],
};
