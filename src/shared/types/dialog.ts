import { SharedModalProps } from "./modal";

export interface SharedDialogProps extends SharedModalProps {
    danger?: boolean;
    title?: string;
    description?: string;
}