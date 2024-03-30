import React from 'react';
import Container from '../base/container/Container';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="w-full border-b">
      <div className="container mx-auto flex items-center justify-between px-5 py-5 lg:px-10">
        <Logo />

        <Search />

        <UserMenu />
      </div>
    </nav>
  );
}
