'use client';

import React from 'react';
import Container from '../base/container/Container';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';
import SignUpModal from '../modals/SignUpModal';

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="fixed z-10 w-full bg-white shadow-sm">
      <div className="border-b py-4">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
          <SignUpModal />
        </Container>
      </div>
    </div>
  );
}
