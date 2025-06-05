/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { Toast, toast } from "react-hot-toast";
import React from "react";
import { ToastIconType } from "@/app/types/ToastIconType";
import { ToastType } from "@/app/types/ToastType";
import SWToast from "../components/base/SWToast";

type ToastOptions = Partial<Pick<Toast, "id" | "icon" | "duration" | "ariaProps" | "className" | "style" | "position" | "iconTheme">>;

class ToastUtils {
    show(
        type: ToastType,
        text: string,
        iconType: ToastIconType,
        opts?: ToastOptions,
        onDismiss?: () => void
    ) {
        toast.custom((t) => (
            <SWToast
              type={type}
              text={text}
              iconType={iconType}
              dismiss={() => {
                toast.dismiss(t.id);
                onDismiss?.();
              }}
            />
          ), opts);
    }


    success = (text: string, iconType: ToastIconType = ToastIconType.CHECK) =>
        this.show(ToastType.SUCCESS, text, iconType);

    warning = (text: string, iconType: ToastIconType = ToastIconType.WARNING, opts?: ToastOptions, onDismiss?: () => void) =>
        this.show(ToastType.WARNING, text, iconType, opts, onDismiss);

    lowWarning = (text: string, iconType: ToastIconType = ToastIconType.WARNING, opts?: ToastOptions, onDismiss?: () => void) =>
        this.show(ToastType.LOW_WARNING, text, iconType, opts, onDismiss);

    error = (text: string, iconType: ToastIconType = ToastIconType.WARNING, opts?: ToastOptions) =>
        this.show(ToastType.ERROR, text, iconType, opts);

    info = (text: string, iconType: ToastIconType = ToastIconType.INFO, opts?: ToastOptions) =>
        this.show(ToastType.INFO, text, iconType, opts);

    genericError = () =>
        this.show(ToastType.ERROR, "There was a problem processing your request", ToastIconType.WARNING);

    genericSuccess = () =>
        this.show(ToastType.SUCCESS, "The operation was completed successfully", ToastIconType.CHECK);

    successWithCallback = (text: string, callback: Function, iconType: ToastIconType = ToastIconType.CHECK) => {
        this.success(text, iconType);
        return callback();
    };

    cleanAllToasts = () => toast.dismiss();
}

export default new ToastUtils();