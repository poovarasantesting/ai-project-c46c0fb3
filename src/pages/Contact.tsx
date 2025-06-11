import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="container py-12 mx-auto">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
          <p className="mt-3 text-muted-foreground">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>
        
        <ContactForm />
        
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>You can also reach us at:</p>
          <p className="font-medium mt-1">support@example.com</p>
        </div>
      </div>
    </div>
  );
}