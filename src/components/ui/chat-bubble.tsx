
import * as React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface ChatBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "sent" | "received";
}

const ChatBubble = React.forwardRef<HTMLDivElement, ChatBubbleProps>(
  ({ className, variant = "received", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex w-max max-w-[80%] animate-in fade-in flex-col gap-2",
          variant === "sent" ? "ml-auto" : "mr-auto",
          className
        )}
        {...props}
      >
        <div className={cn("flex", variant === "sent" ? "justify-end" : "")}>
          {children}
        </div>
      </div>
    );
  }
);
ChatBubble.displayName = "ChatBubble";

interface ChatBubbleAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  fallback: string;
}

const ChatBubbleAvatar = React.forwardRef<HTMLDivElement, ChatBubbleAvatarProps>(
  ({ className, src, fallback, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex h-8 w-8 shrink-0 select-none items-center justify-center overflow-hidden rounded-full bg-muted",
          className
        )}
        {...props}
      >
        {src ? (
          <img
            src={src}
            alt={fallback}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-sm font-medium">{fallback}</span>
        )}
      </div>
    );
  }
);
ChatBubbleAvatar.displayName = "ChatBubbleAvatar";

interface ChatBubbleMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "sent" | "received";
  isLoading?: boolean;
}

const ChatBubbleMessage = React.forwardRef<HTMLDivElement, ChatBubbleMessageProps>(
  ({ className, variant = "received", isLoading = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "ml-2 rounded-xl px-4 py-2.5 text-sm",
          variant === "sent"
            ? "bg-primary text-primary-foreground"
            : "bg-muted",
          className
        )}
        {...props}
      >
        {isLoading ? (
          <Skeleton className="h-5 w-32 bg-muted-foreground/20" />
        ) : (
          children
        )}
      </div>
    );
  }
);
ChatBubbleMessage.displayName = "ChatBubbleMessage";

export { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage };
