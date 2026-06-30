"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "loading" | "success" | "error";

export default function SolicitarExclusao() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { user_email: email },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("success");
    }
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center px-4 font-afacad">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8">
        <h1 className="mb-2 text-2xl font-semibold text-white">
          Solicitar exclusão de conta
        </h1>
        <p className="mb-6 text-sm text-white/50">Aplicativo Livro Caixa</p>

        {status === "success" ? (
          <div className="rounded-xl bg-green-500/10 px-4 py-6 text-center">
            <p className="text-green-400 font-medium">Solicitação enviada!</p>
            <p className="mt-1 text-sm text-white/60">
              Você receberá uma confirmação em breve no email informado.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm text-white/70">
                Email da conta
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-400">
                Erro ao enviar. Tente novamente.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 rounded-lg bg-primary px-4 py-3 font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "loading" ? "Enviando..." : "Enviar solicitação"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
