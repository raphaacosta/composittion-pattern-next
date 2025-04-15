import { Notification } from "@/components/Notification";
export default function Home() {
  return (
    <div className="flex flex-row items-center justify-center min-h-screen p-10 pb-20 gap-16 sm:p-20">
      {/* <div className="bg-[#00688f] rounded-lg p-4"> */}
      <div className="w-[448px] rounded overflow-hidden">
        <div className="flex items-center justify-between py-4 px-6 bg-zinc-800">
          <span className="font-bold">Notificações</span>
          <span className="text-ado font-bold text-xs">Marcar todas como lidas</span>
        </div>
        <div>
          <div className="bg-zinc-950 font-medium px-5 py-2 text-sm text-zinc-400">
            <p>recentes</p>
          </div>
          <div className="divide-y-2 divide-zinc-950">
            <Notification />
            <Notification />
          </div>
        </div>
        <div>
          <div className="bg-zinc-950 font-medium px-5 py-2 text-sm text-zinc-400">
            <p>antigas</p>
          </div>
          <div className="divide-y-2 divide-zinc-950">
            <Notification />
            <Notification />
          </div>
        </div>
      </div>
    </div>
  );
}
