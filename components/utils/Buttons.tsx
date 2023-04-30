import { ButtonProps } from "@/types";

export default function Buttons({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-md hover:opacity-80 transition w-full ${
        outline ? "bg-white" : "bg-rose-500"
      } ${outline ? "border-black" : "border-rose-500"} ${
        outline ? "text-black" : "text-white"
      } ${small ? "py-1" : "py-3"} ${small ? "font-light" : "font-semibold"}  ${
        small ? "border-[1px]" : "border-[2px]"
      }`}>
      {label}
      {Icon && <Icon size={24} className='absolute left-4 top-3' />}
    </button>
  );
}
