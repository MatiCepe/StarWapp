
import { ToastIconType } from "@/app/types/ToastIconType";
import { ToastType } from "@/app/types/ToastType";
import { CheckCircle, InfoIcon, MessageCircleWarningIcon } from "lucide-react";
import React from "react";

interface ToastProps {
  type: ToastType;
  text: string;
  iconType?: ToastIconType;
  dismiss: () => void;
}

const iconMap = {
  [ToastIconType.CHECK]: <CheckCircle />,
  [ToastIconType.WARNING]: <MessageCircleWarningIcon />,
  [ToastIconType.INFO]: <InfoIcon />,
};

export default function SWToast({ type, text, iconType = ToastIconType.INFO, dismiss }: ToastProps) {
  const baseColor = {
    [ToastType.SUCCESS]: "bg-moss dark:bg-olive",
    [ToastType.ERROR]: "bg-red dark:bg-rust",
    [ToastType.WARNING]: "bg-yellow dark:bg-gold",
    [ToastType.LOW_WARNING]: "bg-beige dark:bg-clay",
    [ToastType.INFO]: "bg-sand dark:bg-slate",
  }[type];

  return (
    <div className={`flex items-center justify-between rounded-lg px-4 py-2 shadow text-black dark:text-white ${baseColor}`}>
      <span className="mr-2">{iconMap[iconType]}</span>
      <span className="text-sm">{text}</span>
      <button onClick={dismiss} className="ml-4 text-gray-500 hover:text-black dark:hover:text-white">✕</button>
    </div>
  );
}