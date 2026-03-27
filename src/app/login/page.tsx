import React from "react";
import LoginForm from "@/components/ui/LoginForm";

export const metadata = {
  title: "Iniciar Sesión | Dacribel",
  description: "Accede a tu cuenta de Dacribel",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background py-12">
      <LoginForm />
    </div>
  );
}
