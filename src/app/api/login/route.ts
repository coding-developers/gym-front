import { NextResponse } from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_URL;

export async function GET() {
  const resp = await fetch(`${baseUrl}/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const data = await resp.json();

  return NextResponse.json(data, { status: resp.status });
}
