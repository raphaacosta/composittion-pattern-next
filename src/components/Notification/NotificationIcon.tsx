import { ElementType } from "react"

interface NotificationProps {
  icon: ElementType;
}

export function NotificationIcon({ icon: Icon }: NotificationProps) {
  return (
    <Icon className="w-6 h-6 mt-3" />
  )
} 