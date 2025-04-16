import { ReactNode } from "react"

interface NotificationRootProps {
  children: ReactNode
}

export function NotificationRoot({ children }: NotificationRootProps) {
  return (
    <div className="flex px-8 py-4 items-start bg-zinc-900 gap-6">
      {children}
    </div>
  )
}