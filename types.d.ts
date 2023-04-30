import { IconType } from "react-icons";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

export interface layoutProps {
  title: string;
  descriptions: string;
  children: React.ReactNode;
}


export interface MenuItems {
  onClick: () => void;
  label: string;
}

export interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

export interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

export interface RegisterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export interface HeadingModal {
  title: string;
  subTitle: string;
  center?: boolean;
}

export interface InputModal {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatePrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}


