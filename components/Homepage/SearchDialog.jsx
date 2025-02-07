import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChatInput } from "./ChatInput";

export const SearchDialog = ({ open, onOpenChange, onSend, isLoading }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl bg-[#191A1A] border-[#2c2e2e] p-0">
        <ChatInput onSend={onSend} isLoading={isLoading} />
      </DialogContent>
    </Dialog>
  );
};
