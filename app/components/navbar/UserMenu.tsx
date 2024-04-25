import { Menu } from 'lucide-react';
import Avatar from '../base/avatar/Avatar';
import { RegisterLink, LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';
import { createHome } from '@/app/actions';
import prisma from '@/app/lib/db';
import { redirect } from 'next/navigation';

type Props = {};

async function getUser() {
  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser();
  return kindeUser ? await prisma.user.findUnique({ where: { kindeId: kindeUser?.id } }) : null;
}

export default async function UserMenu({}: Props) {
  const user = await getUser();

  // TODO: Hacky to use KindeId......
  const createHomeWithId = createHome.bind(null, { user });

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {user?.isHost ? (
          <Link href={'/hosting'}>
            <button className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block">
              Manage your homes
            </button>
          </Link>
        ) : (
          <form action={createHomeWithId}>
            <button className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block">
              Airbnb your home
            </button>
          </form>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex cursor-pointer flex-row items-center gap-3 rounded-full border border-b-neutral-200 p-4 transition hover:shadow-md md:px-2 md:py-1">
              <Menu size={20} />
              <div className="hidden md:block">
                <Avatar avatarUrl={user?.avatarUrl} />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {user ? (
              <>
                <DropdownMenuLabel>{`Welcome back, ${user.firstName}!`}</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <MenuItem label={'Messages'} disabled href={'/messages'} />
                <MenuItem label={'Trips'} disabled href={'/trips'} />
                <MenuItem label={'Wishlist'} disabled href={'/wishlist'} />

                <DropdownMenuSeparator />

                {/* TODO Check if user has listings */}
                <MenuItem label={'My listings'} href={'/trips'} />
                <MenuItem label={'Account'} disabled href={'/account'} />

                <DropdownMenuSeparator />

                <MenuItem label={'Help center'} disabled href={'/help'} />

                <DropdownMenuItem className="font-semibold transition hover:bg-neutral-100">
                  <LogoutLink className="w-full">Log out</LogoutLink>
                </DropdownMenuItem>
              </>
            ) : (
              <>
                <DropdownMenuLabel>Get started below!</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem className="font-semibold transition hover:bg-neutral-100">
                  <LoginLink className="w-full">Log in</LoginLink>
                </DropdownMenuItem>
                <DropdownMenuItem className="font-semibold transition hover:bg-neutral-100">
                  <RegisterLink className="w-full">Sign up</RegisterLink>
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

const MenuItem = ({
  label,
  href,
  disabled = false,
}: {
  label: String;
  href: Url;
  disabled?: boolean;
}) => (
  <DropdownMenuItem disabled={disabled} className="font-semibold transition hover:bg-neutral-100">
    <Link href={href} className="w-full">
      {label}
    </Link>
  </DropdownMenuItem>
);
