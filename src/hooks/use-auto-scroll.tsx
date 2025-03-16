
import { useCallback, useEffect, useRef, useState } from "react";

interface UseAutoScrollOptions {
  smooth?: boolean;
  content?: React.ReactNode;
  offset?: number;
}

export function useAutoScroll({
  smooth = false,
  content,
  offset = 100,
}: UseAutoScrollOptions = {}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(true);

  const scrollToBottom = useCallback(() => {
    if (!scrollRef.current) return;

    const { scrollHeight, clientHeight } = scrollRef.current;
    const maxScrollTop = scrollHeight - clientHeight;

    if (smooth) {
      scrollRef.current.scrollTo({
        top: maxScrollTop,
        behavior: "smooth",
      });
    } else {
      scrollRef.current.scrollTop = maxScrollTop;
    }

    setAutoScrollEnabled(true);
    setIsAtBottom(true);
  }, [smooth]);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    const maxScrollTop = scrollHeight - clientHeight;
    const isBottom = maxScrollTop - scrollTop <= offset;

    setIsAtBottom(isBottom);
    
    if (isBottom && !autoScrollEnabled) {
      setAutoScrollEnabled(true);
    }
  }, [autoScrollEnabled, offset]);

  const disableAutoScroll = useCallback(() => {
    if (!scrollRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    const maxScrollTop = scrollHeight - clientHeight;
    const isBottom = maxScrollTop - scrollTop <= offset;

    if (!isBottom && autoScrollEnabled) {
      setAutoScrollEnabled(false);
    }
  }, [autoScrollEnabled, offset]);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
      return () => scrollElement.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  useEffect(() => {
    if (autoScrollEnabled) {
      scrollToBottom();
    }
  }, [content, autoScrollEnabled, scrollToBottom]);

  return {
    scrollRef,
    isAtBottom,
    autoScrollEnabled,
    scrollToBottom,
    disableAutoScroll,
  };
}
