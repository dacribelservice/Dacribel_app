import React from "react";
import ForgotPasswordForm from "@/components/ui/ForgotPasswordForm";

export const metadata = {
  title: "Recuperar Contraseña | Dacribel",
  description: "Solicita un enlace para restablecer tu contraseña",
};

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background py-12">
      <ForgotPasswordForm />
    </div>
  );
}
