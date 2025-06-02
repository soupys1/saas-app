import React from 'react';
import Link from "next/link";
import Image from "next/image";
import NavItems from './NavItems'; 

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center p-4">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/Images/logo.svg" alt="logo" width={46} height={44} />
        </div>
      </Link>
      <NavItems />
    </nav>
  );
};

export default Navbar;
