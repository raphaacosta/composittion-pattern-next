import { Check, X } from "lucide-react";
import { ReactNode } from "react";

interface NotificationActionsProps {
  // onSubmitAction: () => void;
  // onCancelAction: () => void;
  children: ReactNode;
}

export function NotificationActions({ children }: NotificationActionsProps) {
  return (
    <div className="flex gap-2 self-center">
      {children}
      {/* <button className="w-8 h-8 rounded flex items-center justify-center cursor-pointer bg-ado hover:bg-dark-ado">
        <Check className="w-3 h-3 text-zinc-50" />
      </button> */}
    </div>
  )
}