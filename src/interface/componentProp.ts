export interface FormInterface {
  title: string;
  content: string;
}

export interface ButtonInterface {
  content: string;
  isError?: boolean;
  state: BtnClassHook;
  onClick?: () => void;
}

export interface PostBoardInterface {
  content: PostInterface;
}

export interface PostInterface {
  id: number;
  title: string;
  content: string;
  like: number;
}

export interface PostDetailInterface {
  content: PostInterface;
}

export interface BtnClassHook {
  type: 'submit' | 'button' | 'reset';
  className: string;
}

export interface LikeBtnInterface {
  like: number;
  id: number;
}
