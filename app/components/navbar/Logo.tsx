'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Props = {};

export default function Logo({}: Props) {
  const router = useRouter();
  return (
    <Link href={'/'}>
      <Image
        alt="logo"
        className="hidden cursor-pointer md:block"
        height={'100'}
        width={'100'}
        src={'/images/logo.png'}
      />
    </Link>
  );
}
