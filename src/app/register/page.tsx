import React from "react";
import RegisterForm from "@/components/ui/RegisterForm";

export const metadata = {
  title: "Crear Cuenta | Dacribel",
  description: "Únete a Dacribel hoy mismo",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background py-12">
      <RegisterForm />
    </div>
  );
}
