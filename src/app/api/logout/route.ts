import { API_URL } from "@/constants/api";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const cookieStore = cookies();
  request;
  try {
    cookieStore.set({
      name: "token",
      value: "",
      httpOnly: true,
      path: "/",
      maxAge: 0,
      domain: new URL(API_URL).hostname,
      sameSite: "lax",
    });
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
