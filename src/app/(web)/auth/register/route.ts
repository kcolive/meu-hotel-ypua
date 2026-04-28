import { NextResponse } from "next/server";
import { client } from "@/libs/sanity";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // verifica se já existe
  const existingUser = await client.fetch(
    `*[_type == "user" && email == $email][0]`,
    { email }
  );

  if (existingUser) {
    return NextResponse.json({ error: "User exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await client.create({
    _type: "user",
    email,
    password: hashedPassword,
  });

  return NextResponse.json({ success: true });
}