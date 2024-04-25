'use client';

import React from 'react';
import Logo from './Logo';
import Search from './Search';
import { usePathname } from 'next/navigation';
import HostingNavigation from './HostingNavigation';

type Props = { userMenu: React.ReactNode };

export default function Navbar({ userMenu }: Props) {
  const pathname = usePathname();

  return (
    <nav className="w-full border-b">
      <div className="container mx-auto flex items-center justify-between px-5 py-5 lg:px-10">
        <Logo />

        {pathname.startsWith('/hosting') ? <HostingNavigation /> : <Search />}

        {userMenu}
      </div>
    </nav>
  );
}
