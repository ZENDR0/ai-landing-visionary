
import { useState, FormEvent, useEffect } from "react";
import { Paperclip, Mic, CornerDownLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat-bubble";
import { ChatMessageList } from "@/components/ui/chat-message-list";
import { ChatInput } from "@/components/ui/chat-input";

interface Message {
  id: number;
  content: string;
  sender: "user" | "ai";
  isImage?: boolean;
}

export function AiChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! How can I help you today?",
      sender: "ai",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        content: input,
        sender: "user",
      },
    ]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response after delay
    setTimeout(() => {
      generateRandomAIResponse();
      setIsLoading(false);
    }, 1500);
  };

  const generateRandomAIResponse = () => {
    // Random responses
    const textResponses = [
      "I'm analyzing your request. Could you provide more details?",
      "That's an interesting question. Let me help you with that.",
      "I understand what you're asking for. Here's what I think:",
      "Based on your question, I believe I can assist you with this.",
      "I've processed your request and have some information for you."
    ];
    
    // Sample image URLs
    const imageURLs = [
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&q=80",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&q=80",
    ];
    
    // Randomly decide if response is image or text
    const isImage = Math.random() > 0.5;
    
    if (isImage) {
      // Random image response
      const randomImageIndex = Math.floor(Math.random() * imageURLs.length);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          content: imageURLs[randomImageIndex],
          sender: "ai",
          isImage: true
        },
      ]);
    } else {
      // Random text response
      const randomTextIndex = Math.floor(Math.random() * textResponses.length);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          content: textResponses[randomTextIndex],
          sender: "ai",
        },
      ]);
    }
  };

  const handleAttachFile = () => {
    // Placeholder for file attachment functionality
    console.log("File attachment clicked");
  };

  const handleMicrophoneClick = () => {
    // Placeholder for microphone functionality
    console.log("Microphone clicked");
  };

  return (
    <div className="h-[600px] border bg-background rounded-lg flex flex-col overflow-hidden glass-morphism w-full">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">Chat with AI Assistant</h3>
      </div>
      
      <div className="flex-1 overflow-hidden">
        <ChatMessageList>
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              variant={message.sender === "user" ? "sent" : "received"}
            >
              <ChatBubbleAvatar
                className="h-8 w-8 shrink-0"
                src={
                  message.sender === "user"
                    ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&q=80&crop=faces&fit=crop"
                    : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&q=80&crop=faces&fit=crop"
                }
                fallback={message.sender === "user" ? "US" : "AI"}
              />
              <ChatBubbleMessage
                variant={message.sender === "user" ? "sent" : "received"}
              >
                {message.isImage ? (
                  <img 
                    src={message.content} 
                    alt="AI generated image" 
                    className="max-w-full rounded-md"
                  />
                ) : (
                  message.content
                )}
              </ChatBubbleMessage>
            </ChatBubble>
          ))}

          {isLoading && (
            <ChatBubble variant="received">
              <ChatBubbleAvatar
                className="h-8 w-8 shrink-0"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&q=80&crop=faces&fit=crop"
                fallback="AI"
              />
              <ChatBubbleMessage isLoading />
            </ChatBubble>
          )}
        </ChatMessageList>
      </div>

      <div className="p-4 border-t">
        <form
          onSubmit={handleSubmit}
          className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1"
        >
          <ChatInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
          />
          <div className="flex items-center p-3 pt-0 justify-between">
            <div className="flex">
              <Button
                variant="ghost"
                size="icon"
                type="button"
                onClick={handleAttachFile}
              >
                <Paperclip className="size-4" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                type="button"
                onClick={handleMicrophoneClick}
              >
                <Mic className="size-4" />
              </Button>
            </div>
            <Button type="submit" size="sm" className="ml-auto gap-1.5">
              Send Message
              <Send className="size-3.5" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
