import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const cookieStore = cookies();
  request;
  try {
    cookieStore.delete("token");
  } catch (error) {
    return NextResponse.json(
      { success: false },
      {
        status: 500,
        statusText: " failed",
      },
    );
  }
  return NextResponse.json({ success: true });
}
