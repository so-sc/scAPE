// src/middleware.ts
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
export async function middleware(req: NextRequest) {
  const res = await fetch('https://devhost-qr-reg.onrender.com/check-auth', {
    headers: {
      cookie: req.headers.get('cookie') || '',
    },
  });
  const userData= await res.json();
  if (res.status === 401) {
    return NextResponse.redirect(new URL('https://devhost-qr-reg.onrender.com/auth/google/', req.url));
  }
else{
  if(userData.user.college&&req.nextUrl.pathname === '/register') return NextResponse.redirect(new URL('/events', req.url));
}
  return NextResponse.next();
}
export const config = {
  matcher: ['/events', '/register','/profile','/edit'],
};
