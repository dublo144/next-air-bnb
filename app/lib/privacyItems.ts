export type PrivacyType = {
  name: string;
  title: string;
  description: string;
  iconUrl: string;
};

export const privacyTypeItems: PrivacyType[] = [
  {
    name: 'place',
    title: 'An entire place',
    description: 'Guests will have the whole place for themselves',
    iconUrl: 'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg',
  },
  {
    name: 'room',
    title: 'A single room',
    description: 'Guests will have their own room in a home with access to shared spaces',
    iconUrl: 'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg',
  },
  {
    name: 'shared',
    title: 'A shared room',
    description: 'Guests will sleep in a room or common area that may be shared with you or others',
    iconUrl: 'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg',
  },
];
