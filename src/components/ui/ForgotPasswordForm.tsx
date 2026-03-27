"use client";

import React from "react";
import Link from "next/link";
import { Mail, ArrowLeft } from "lucide-react";

export const ForgotPasswordForm = () => {
  return (
    <main className="w-full max-w-md mx-auto px-4">
      {/* Brand Identity */}
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-3xl font-black text-action tracking-tighter select-none cursor-pointer">
          DACRIBEL
        </h1>
      </div>

      {/* Glassmorphism Container */}
      <div className="bg-secondary/40 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden border border-white/5">
        {/* Contextual Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-black tracking-tight text-white mb-2">
            Recuperar tu contraseña
          </h2>
          <p className="text-inactive text-sm font-medium">
            Ingresa tu correo y te enviaremos las instrucciones.
          </p>
        </div>

        {/* Credentials Form */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-inactive uppercase tracking-[0.2em] ml-1">
              CORREO ELECTRÓNICO
            </label>
            <div className="relative group rounded-2xl overflow-hidden transition-all border border-white/5 focus-within:border-action/50 bg-background/30 focus-within:bg-background/50">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="text-inactive w-5 h-5 group-focus-within:text-action transition-colors" />
              </div>
              <input
                className="w-full bg-transparent border-none py-4 pl-12 pr-4 text-white placeholder:text-inactive/50 focus:ring-0 text-sm outline-none"
                placeholder="name@vault.com"
                type="email"
              />
            </div>
          </div>

          <button
            className="w-full bg-action text-background hover:brightness-110 active:scale-[0.98] transition-all duration-200 font-black py-4 rounded-2xl shadow-[0_8px_20px_rgba(242,185,47,0.2)] mt-4 uppercase tracking-widest text-xs"
            type="submit"
          >
            Recuperar
          </button>
        </form>

        <div className="mt-8 text-center space-y-4">
          <p className="text-sm text-inactive font-medium">
            ¿No tienes una cuenta?{" "}
            <Link
              className="text-action font-bold hover:underline decoration-action/30 underline-offset-4 ml-1"
              href="/register"
            >
              Crear cuenta
            </Link>
          </p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-[10px] font-bold text-inactive hover:text-white transition-all uppercase tracking-widest group"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            Volver al login
          </Link>
        </div>

        {/* Tonal Accent (Subtle Glow) */}
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-action/5 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/5 blur-[80px] rounded-full pointer-events-none"></div>
      </div>

      {/* Footer Links */}
      <div className="mt-8 flex justify-center gap-6 opacity-40 hover:opacity-100 transition-opacity duration-500">
        <a
          className="text-[10px] font-bold uppercase tracking-widest hover:text-action"
          href="#"
        >
          TÉRMINOS
        </a>
        <a
          className="text-[10px] font-bold uppercase tracking-widest hover:text-action"
          href="#"
        >
          PRIVACIDAD
        </a>
        <a
          className="text-[10px] font-bold uppercase tracking-widest hover:text-action"
          href="#"
        >
          SEGURIDAD
        </a>
      </div>
    </main>
  );
};

export default ForgotPasswordForm;
