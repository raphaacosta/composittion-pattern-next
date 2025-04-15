import { Mail, X, Check } from "lucide-react";

export function Notification() {
  return (
    <div className="flex px-8 py-4 items-start bg-zinc-900 gap-6">
      <Mail color="#00688f" className="w-6 h-6 mt-3" />
      <div className="flex-1 flex flex-col gap-2">
        <p className="text-sm leading-relaxed text-zinc-100">Você recebeu um convite para fazer parte da empresa Rocketseat</p>
        <div className=" text-zinc-400 flex items-center gap-1">
          <span>Convite</span>
          <span>há 3 min</span>
        </div>
      </div>
      <div className="flex gap-2 self-center">
        <button className="w-8 h-8 rounded flex items-center justify-center cursor-pointer">
          <X className="w-3 h-3 text-zinc-50" />
        </button>
        <button className="w-8 h-8 rounded flex items-center justify-center cursor-pointer bg-ado">
          <Check className="w-3 h-3 text-zinc-50" />
        </button>
      </div>
    </div>
  )
}