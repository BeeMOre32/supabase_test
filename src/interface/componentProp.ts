export interface FormInterface {
  title: string;
  content: string;
}

export interface ButtonInterface {
  content: string;
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
}

export interface PostDetailInterface {
  content: PostInterface;
}

export interface BtnClassHook {
  type: 'submit' | 'button' | 'reset';
  className: string;
}
