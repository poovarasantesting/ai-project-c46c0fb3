import { LoginForm } from "@/components/LoginForm";
import { Toaster } from "@/components/ui/toaster";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
      <Toaster />
    </div>
  );
}