import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
export async function middleware(req: NextRequest) {
 
return NextResponse.redirect(new URL('/', req.url));
}

export const config = {

  matcher: ['/events','/register'],
  //'/events','/edit', '/register'
};


//  matcher: ['/events','/register','/profile','/edit'],