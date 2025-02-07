"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CirclePlus, Paperclip, SendHorizontal } from "lucide-react";
import { useState } from "react";

export const ChatInput = ({ onSend, isLoading }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    onSend(input);
    setInput("");
  };

  const handleAttachment = () => {
    console.log("Attachment button clicked");
  };

  const handleFocus = () => {
    console.log("Focus button clicked");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl mx-auto px-4 py-4"
    >
      <div className="relative">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything..."
          className="w-full pr-12 bg-[#202222] border-[#8D9191] hover:border-gray-500 focus:border-gray-500 transition-colors text-base md:text-lg h-24 md:h-28 pt-2"
          disabled={isLoading}
        />
        <div className="absolute bottom-1 left-2 flex space-x-2">
          <Button
            type="button"
            variant="ghost"
            onClick={handleAttachment}
            className="bg-transparent hover:bg-[#2c2e2e] rounded-full"
          >
            <Paperclip className="h-5 w-5 text-[#8D9191]" />
            <span className="text-[#8D9191]">Attach</span>
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={handleFocus}
            className="bg-transparent hover:bg-[#2c2e2e] rounded-full"
          >
            <CirclePlus className="h-5 w-5 text-[#8D9191]" />
            <span className="text-[#8D9191]">Focus</span>
          </Button>
        </div>
        <Button
          type="submit"
          size="icon"
          disabled={!input.trim() || isLoading}
          className="absolute right-2 top-2 bg-transparent hover:bg-accent/50"
        >
          <SendHorizontal className="h-5 w-5 text-cyan-500" />
        </Button>
      </div>
    </form>
  );
};
