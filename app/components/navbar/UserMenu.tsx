'use client';
import { Menu } from 'lucide-react';
import React, { useCallback, useState } from 'react';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import useSignUpModal from '@/app/hooks/useSignUpModal';

type Props = {};

export default function UserMenu({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const signUpModal = useSignUpModal();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="flex cursor-pointer flex-row items-center gap-3 rounded-full border border-b-neutral-200 p-4 transition hover:shadow-md md:px-2 md:py-1"
        >
          <Menu size={20} />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-0 top-12 w-[40vw] overflow-hidden rounded-xl bg-white text-sm shadow-md md:w-3/4">
          <div className="flex cursor-pointer flex-col">
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={signUpModal.onOpen} label="Sign up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
}
