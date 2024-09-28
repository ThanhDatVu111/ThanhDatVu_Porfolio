"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/", //By default, the home page is routed at / (the root).
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-10">
      {links.map((link) => {
        return (
          <Link
            href={link.path} //This line tells Next.js to navigate to the URL specified in link.path when the user clicks on the link.
            key={link.name}
            className={`${
              link.path === pathname && "text-[#3ea1ce] border-b-2 border-[#20777f]"
            } capitalize font-medium hover:text-[#20777f] transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;