import { Calculator } from "@/components/Calculator";
import { Toaster } from "@/components/ui/toaster";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Calculator />
      <Toaster />
    </div>
  );
}