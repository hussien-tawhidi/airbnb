"use client";

import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

export default function Navbar() {
  // console.log(currentUser);
  return (
    <div className='fixed w-full py-4 border-b-[1px] bg-white px-10 z-10 shadow-sm'>
      <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
        <Logo />
        <Search />
        <UserMenu />
      </div>
    </div>
  );
}
