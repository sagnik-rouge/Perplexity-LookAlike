"use client";

import { ChatInput } from "@/components/Homepage/ChatInput";
import { Footer } from "@/components/Homepage/Footer";
import { useState } from "react";
import { MonitorSmartphone, DollarSign, MonitorPlay, Plug } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleSend = async (message) => {
    try {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        router.replace(`/search/${message.replace(/\s+/g, "-")}--${uuidv4()}`);
      }, 1000);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
      setIsLoading(false);
    }
  };

  const suggestionTabs = [
    { icon: DollarSign, text: "What is a ROTH IRA?" },
    { icon: MonitorSmartphone, text: "Meditation techniques in 2025" },
    { icon: MonitorPlay, text: "New AI design tools" },
    { icon: Plug, text: "Chargers and adapters for travel" },
  ];

  return (
    <div>
      <main className="flex flex-1 flex-col relative">
        <div className="flex-1 overflow-y-auto pb-32">
          <div className="flex flex-col h-[calc(100vh-12rem)] justify-center items-center space-y-8">
            <div className="max-w-2xl text-center space-y-4">
              <h2 className="text-4xl text-white">What do you want to know?</h2>
            </div>
            <div className="w-full max-w-3xl px-4">
              <ChatInput onSend={handleSend} isLoading={isLoading} />
              <div className="mt-4 space-y-2 md:items-center md:justify-center md:gap-3 md:grid md:grid-cols-2">
                {suggestionTabs.map((tab, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-2 py-2 rounded-lg bg-[#191A1A]/50 hover:bg-gray-400/10 border-[0.1px] border-gray-400 transition-colors flex items-center gap-3"
                    onClick={() => handleSend(tab.text)}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.text}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="absolute bottom-16 right-0 left-0">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
