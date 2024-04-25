import type { Metadata } from 'next';

import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar/Navbar';
import UserMenu from './components/navbar/UserMenu';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="flex h-screen flex-col">
          <Navbar userMenu={<UserMenu />} />
          {children}
        </div>
      </body>
    </html>
  );
}
