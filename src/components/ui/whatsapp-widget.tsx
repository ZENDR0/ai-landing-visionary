
import { MessageSquare } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface WhatsAppWidgetProps {
  phoneNumber?: string;
  welcomeMessage?: string;
}

export function WhatsAppWidget({
  phoneNumber = "1234567890",
  welcomeMessage = "Hello! I'd like to know more about your AI solutions.",
}: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenWhatsApp = () => {
    const encodedMessage = encodeURIComponent(welcomeMessage);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="mb-4 w-72 shadow-lg animate-fade-in glass-morphism light-theme:bg-white light-theme:border-gray-200">
          <CardContent className="p-4">
            <h3 className="font-medium mb-2 light-theme:text-gray-800">Contact us on WhatsApp</h3>
            <p className="text-sm text-muted-foreground mb-4 light-theme:text-gray-600">
              Chat with our team to learn more about our AI solutions.
            </p>
            <Button 
              onClick={handleOpenWhatsApp}
              className="w-full light-theme:bg-green-500 light-theme:hover:bg-green-600"
            >
              Start Chat
            </Button>
          </CardContent>
        </Card>
      )}
      <Button
        size="icon"
        className="h-14 w-14 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    </div>
  );
}
