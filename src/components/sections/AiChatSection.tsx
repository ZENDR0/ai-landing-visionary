
import { AiChatSection as AiChat } from "@/components/ui/ai-chat-section";

const AiChatSection = () => {
  return (
    <section id="ai-chat" className="py-20">
      <div className="content-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="text-gradient">Chat with Our AI</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12">
          Ask questions, get insights, or explore possibilities with our intelligent assistant.
        </p>
        <AiChat />
      </div>
    </section>
  );
};

export default AiChatSection;
