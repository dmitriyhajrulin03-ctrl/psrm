import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function authMiddleware(request: NextRequest) {
  // Auth middleware logic
  return NextResponse.next();
}





