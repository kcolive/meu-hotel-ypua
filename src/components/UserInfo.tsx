"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <button onClick={() => signIn("google")}>
        Entrar
      </button>
    );
  }

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <span>{session.user?.name}</span>
      <button onClick={() => signOut()}>
        Sair
      </button>
    </div>
  );
}
