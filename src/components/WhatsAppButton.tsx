import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "254704848442"; // Kenya format
  const message = "Hi! I'm interested in renting a car from Jaden Car Rental Services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-luxury hover:scale-110 transition-smooth group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-2 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-smooth whitespace-nowrap">
        Chat with us on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
