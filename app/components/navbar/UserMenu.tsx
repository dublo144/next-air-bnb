import { Menu } from 'lucide-react';
import Avatar from '../base/avatar/Avatar';
import { RegisterLink, LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import type KindeUser from '@kinde-oss/kinde-auth-nextjs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

type Props = {};

export default async function UserMenu({}: Props) {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block">
          Airbnb your home
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex cursor-pointer flex-row items-center gap-3 rounded-full border border-b-neutral-200 p-4 transition hover:shadow-md md:px-2 md:py-1">
              <Menu size={20} />
              <div className="hidden md:block">
                <Avatar avatarUrl={user?.picture} />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {user ? (
              <DropdownMenuItem className="font-semibold transition hover:bg-neutral-100">
                <LogoutLink className="w-full">Log out</LogoutLink>
              </DropdownMenuItem>
            ) : (
              <>
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
