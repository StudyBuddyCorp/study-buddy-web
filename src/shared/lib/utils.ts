import { type ClassValue, clsx } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";
import { enUS, ru } from "date-fns/locale";
import i18n from "@/i18n";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function gd(date: Date) {  
    if (i18n.language === "en-US") {
        return format(date, "PP", { locale: enUS });
    }
    return format(date, "PP", { locale: ru });
}
