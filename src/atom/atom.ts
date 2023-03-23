import { atom } from 'recoil';
import { SortBy } from '../api/atomInterface';

export const formActive = atom<boolean>({
  key: 'formActive',
  default: false,
});

export const isReverse = atom<boolean>({
  key: 'isReverse',
  default: false,
});

export const sortByState = atom<SortBy>({
  key: 'sortBy',
  default: 'date_range',
});
