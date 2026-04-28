"use client";

import { useState } from "react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/sanity/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.text();

    if (res.ok) {
      alert("Conta criada! Agora faça login.");
    } else {
      console.log("ERRO API:", data);
      alert(data || "Erro ao criar conta");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-[70vh] gap-6">
      <h1 className="text-2xl font-bold">Criar conta</h1>

      <form onSubmit={handleSignUp} className="flex flex-col gap-3 w-72">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border px-3 py-2 rounded"
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border px-3 py-2 rounded"
        />

        <button className="bg-green-600 text-white py-2 rounded">
          Criar conta
        </button>
      </form>
    </div>
  );
}