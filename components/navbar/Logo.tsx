import Image from "next/image";
"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link href='/'>
      <Image src='/images/logo.png' height={100} width={100} alt='Logo' />
    </Link>
  );
}
