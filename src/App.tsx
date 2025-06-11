import React from "react";
import UserForm from "./components/UserForm";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <UserForm />
      <Toaster />
    </>
  );
}

export default App;