export interface FormInterface {
  title: string;
  content: string;
}

export interface ButtonInterface {
  content: string;
  option?: OptionInterface;
}

export interface PostBoardInterface {
  content: PostInterface;
  option?: OptionInterface;
}

export interface OptionInterface {
  [key: string]: string | number;
}

export interface PostInterface {
  id: number;
  title: string;
  content: string;
}

export interface PostDetailInterface {
  content: PostInterface;
}
