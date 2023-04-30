"use client";

import { MenuItems } from "@/types";

export default function MenuItems({ onClick, label }: MenuItems) {
  return (
    <div
      className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
      onClick={onClick}>
      {label}
    </div>
  );
}
