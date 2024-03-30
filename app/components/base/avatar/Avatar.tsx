'use client';

import React from 'react';
import { Avatar as ShadAvatar, AvatarImage } from '../../ui/avatar';

type Props = {
  avatarUrl: string | null | undefined;
};

export default function Avatar({ avatarUrl }: Props) {
  return (
    <ShadAvatar className="h-10 w-10">
      <AvatarImage src={avatarUrl ?? '/images/placeholder.jpeg'} alt="avatar" />
    </ShadAvatar>
  );
}
