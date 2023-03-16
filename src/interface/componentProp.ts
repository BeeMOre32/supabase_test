export interface FormInterface {
  title: string;
  content: string;
}

export interface ButtonInterface {
  content: string;
  option?: OptionInterface;
}

export interface OptionInterface {
  [key: string]: string | number;
}
