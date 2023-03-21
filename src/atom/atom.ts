import { atom } from 'recoil';

export const formActive = atom<boolean>({
  key: 'formActive',
  default: false,
});
