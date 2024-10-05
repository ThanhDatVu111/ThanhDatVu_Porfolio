import React from 'react'

import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-[#0c2128]">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Thanh Dat Vu<span className="text-[#3ea1ce]">.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact"> {/*when user clicked hire me button, it lead them to the contact page*/}
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden"> {/*xl:hidden, the element will be hidden on screens that are 1280px or wider*/}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header