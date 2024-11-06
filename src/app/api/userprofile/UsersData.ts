import mock from '../mock';
import { sub } from 'date-fns';
import { Chance } from 'chance';
import { uniqueId } from 'lodash';
import type { userType } from '@/app/(DashboardLayout)/types/apps/users';

const chance = new Chance();

const users: userType[] = [
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-10.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-2.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-3.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-4.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-5.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-6.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-7.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-8.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-9.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-10.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-5.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-2.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-3.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-4.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-5.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-6.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-7.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-8.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-9.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-10.jpg",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
];

const gallery = [
  {
    id: uniqueId('#gallery_'),
    cover: "/images/products/s1.jpg",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: "/images/products/s2.jpg",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 8, hours: 4, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: "/images/products/s3.jpg",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 8, hours: 3, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: "/images/products/s4.jpg",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 8, hours: 2, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: "/images/products/s5.jpg",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 8, hours: 1, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: "/images/products/s6.jpg",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 7, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: "/images/products/s7.jpg",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 6, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: "/images/products/s8.jpg",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 5, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: "/images/products/s9.jpg",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 4, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: "/images/products/s10.jpg",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 3, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: "/images/products/s11.jpg",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 2, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: "/images/products/s12.jpg",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 1, hours: 6, minutes: 20 }),
  },
];

mock.onGet('/api/data/users').reply(() => {
  return [200, users];
});

mock.onGet('/api/data/gallery').reply(() => {
  return [200, gallery];
});
