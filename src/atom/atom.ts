import { atom } from 'recoil';

export const formActive = atom<boolean>({
  key: 'formActive',
  default: false,
});

export const isReverse = atom<boolean>({
  key: 'isReverse',
  default: false,
});

export const sortByState = atom<'date' | 'like'>({
  key: 'sortBy',
  default: 'date',
});
