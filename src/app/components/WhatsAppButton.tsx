import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/919640484677?text=Hi,%20I'm%20interested%20in%20solar%20solutions%20from%20Elrix%20Energy.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </a>
  );
}
