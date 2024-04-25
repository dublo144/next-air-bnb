'use client';

import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

type Props = {};

const basePath = '/hosting';

const navigationItems: { href: string; label: string }[] = [
  {
    href: '',
    label: 'Dashboard',
  },
  {
    href: '/inbox',
    label: 'Inbox',
  },
  {
    href: '/listings',
    label: 'My listings',
  },
  {
    href: '/calendar',
    label: 'Calendar',
  },
];

export default function HostingNavigation({}: Props) {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className="flex space-x-2">
      {navigationItems.map((item) => (
        <div key={item.href} className="flex flex-col items-center">
          <Link href={`${basePath}${item.href}`}>
            <Button
              variant={'ghost'}
              className="rounded-full px-4 py-3 text-sm font-semibold hover:bg-neutral-100"
            >
              {item.label}
            </Button>
          </Link>
          {pathname === `${basePath}${item.href}` && (
            <div className="w-6 border-b-2 border-rose-500" />
          )}
        </div>
      ))}
    </div>
  );
}
